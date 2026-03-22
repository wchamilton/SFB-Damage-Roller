import { useState } from 'react'
import './App.css'
import { damageTable, COLUMNS, DamageSystem } from './damageTable'

function App() {
  const [damageInput, setDamageInput] = useState<string>('1')
  const [rollResults, setRollResults] = useState<number[]>([])
  const [columnIndices, setColumnIndices] = useState<number[]>([])
  const [showResults, setShowResults] = useState<boolean>(false)
  const [rollTallyOpen, setRollTallyOpen] = useState<boolean>(false)

  const rollDice = () => {
    const parsed = Number.parseInt(damageInput, 10)
    const damageAmount = Number.isFinite(parsed) ? Math.min(999, Math.max(1, parsed)) : 1

    if (damageInput !== String(damageAmount)) {
      setDamageInput(String(damageAmount))
    }

    const rolls: number[] = []
    for (let i = 0; i < damageAmount; i++) {
      const die1 = Math.floor(Math.random() * 6) + 1
      const die2 = Math.floor(Math.random() * 6) + 1
      rolls.push(die1 + die2)
    }

    console.log(`Damage Amount: ${damageAmount}`)
    console.log(`2d6 Rolls (${damageAmount}x): ${rolls.join(', ')}`)

    setRollResults(rolls)
    setColumnIndices(rolls.map(() => 0))
    setShowResults(true)
  }

  const getSystemsForRoll = (roll: number, columnIndex: number): DamageSystem[] => {
    if (columnIndex >= COLUMNS.length) {
      return []
    }

    const damageRow = damageTable[roll]
    
    if (!damageRow || columnIndex >= damageRow.length) {
      return []
    }

    return damageRow[columnIndex]
  }

  const handleNextColumn = (rollIndex: number) => {
    const newIndices = [...columnIndices]
    if (newIndices[rollIndex] < COLUMNS.length - 1) {
      newIndices[rollIndex]++
      setColumnIndices(newIndices)
    }
  }

  const handlePreviousColumn = (rollIndex: number) => {
    const newIndices = [...columnIndices]
    if (newIndices[rollIndex] > 0) {
      newIndices[rollIndex]--
      setColumnIndices(newIndices)
    }
  }

  const handleRollAgain = () => {
    setShowResults(false)
    setColumnIndices([])
  }

  const isConflicting = (rollIndex: number): boolean => {
    const roll = rollResults[rollIndex]
    const col = columnIndices[rollIndex]
    const systems = getSystemsForRoll(roll, col)
    if (!systems.some(s => s.isBold)) return false
    return rollResults.some((otherRoll, otherIndex) =>
      otherIndex !== rollIndex && otherRoll === roll && columnIndices[otherIndex] === col
    )
  }

  const systemTally: Record<string, number> = rollResults.reduce((tally, roll, rollIndex) => {
    getSystemsForRoll(roll, columnIndices[rollIndex]).forEach(system => {
      tally[system.name] = (tally[system.name] || 0) + 1
    })
    return tally
  }, {} as Record<string, number>)

  const tallyEntries = Object.entries(systemTally).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

  // Sort original indices by roll value ascending for card rendering
  const sortedIndices = rollResults
    .map((roll, i) => ({ roll, i }))
    .sort((a, b) => a.roll - b.roll)
    .map(({ i }) => i)

  const rollValueTally: Record<number, number> = rollResults.reduce((tally, roll) => {
    tally[roll] = (tally[roll] || 0) + 1
    return tally
  }, {} as Record<number, number>)
  const rollValueEntries = Object.entries(rollValueTally)
    .map(([k, v]) => [Number(k), v] as [number, number])
    .sort((a, b) => a[0] - b[0])

  // First card (in sorted order) for each roll value
  const firstCardForRollValue: Record<number, number> = {}
  for (const origIndex of sortedIndices) {
    const rv = rollResults[origIndex]
    if (!(rv in firstCardForRollValue)) firstCardForRollValue[rv] = origIndex
  }

  if (showResults) {
    return (
      <div className="container">
        <h1>SFB Damage Allocation</h1>

        <div className="roll-tally-section">
          <button
            className="roll-tally-toggle"
            onClick={() => setRollTallyOpen(o => !o)}
            aria-expanded={rollTallyOpen}
          >
            <span>Roll Summary</span>
            <span className="roll-tally-chevron">{rollTallyOpen ? '▲' : '▼'}</span>
          </button>
          {rollTallyOpen && (
            <ul className="roll-tally-list">
              {rollValueEntries.map(([value, count]) => (
                <li key={value} className="roll-tally-item">
                  <a
                    href={`#roll-card-${firstCardForRollValue[value]}`}
                    className="roll-tally-link"
                  >
                    <span className="roll-tally-label">Roll {value}</span>
                    <span className="roll-tally-count">×{count}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="results-section">
          <div className="rolls-container">
            {sortedIndices.map((rollIndex, sortedPos) => {
              const roll = rollResults[rollIndex]
              const systems = getSystemsForRoll(roll, columnIndices[rollIndex])
              return (
                <div key={rollIndex} id={`roll-card-${rollIndex}`} className={`roll-row${isConflicting(rollIndex) ? ' roll-row--conflict' : ''}`}>
                  <div className="roll-header">
                    <span className="roll-number">Roll {sortedPos + 1}: {roll}</span>
                  </div>
                  <div className="systems-list">
                    <ul>
                      {systems.map((system, systemIndex) => (
                        <li key={systemIndex} className={system.isBold ? 'bold-system' : ''}>
                          {system.name}{system.isBold ? ' (Once per turn)' : ''}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="roll-controls">
                    <button
                      onClick={() => handlePreviousColumn(rollIndex)}
                      disabled={columnIndices[rollIndex] === 0}
                      className="nav-button"
                    >
                      ← Prev
                    </button>
                    <span className="column-badge">
                      {COLUMNS[columnIndices[rollIndex]]}
                    </span>
                    <button
                      onClick={() => handleNextColumn(rollIndex)}
                      disabled={columnIndices[rollIndex] === COLUMNS.length - 1}
                      className="nav-button"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {tallyEntries.length > 0 && (
            <div className="tally-section">
              <h3 className="tally-title">Systems Damaged</h3>
              <ul className="tally-list">
                {tallyEntries.map(([name, count]) => (
                  <li key={name} className="tally-item">
                    <span className="tally-name">{name}</span>
                    <span className="tally-count">×{count}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button onClick={handleRollAgain} className="confirm-button">
            Roll Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>SFB Damage Allocation</h1>
      
      <div className="form-group">
        <label htmlFor="damage-input">Damage Amount:</label>
        <input
          id="damage-input"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={damageInput}
          onChange={(e) => setDamageInput(e.target.value.replace(/\D/g, ''))}
          onKeyDown={(e) => { if (e.key === 'Enter') rollDice() }}
        />
      </div>

      <button onClick={rollDice} className="confirm-button">
        Roll Dice
      </button>
    </div>
  )
}

export default App
