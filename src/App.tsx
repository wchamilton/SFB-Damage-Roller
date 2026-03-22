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
    if (columnIndex >= COLUMNS.length) return []
    const damageRow = damageTable[roll]
    if (!damageRow || columnIndex >= damageRow.length) return []
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

  const rollIndicesByValue: Record<number, number[]> = rollResults.reduce((acc, roll, idx) => {
    if (!acc[roll]) acc[roll] = []
    acc[roll].push(idx)
    return acc
  }, {} as Record<number, number[]>)

  const uniqueSortedValues = Object.keys(rollIndicesByValue).map(Number).sort((a, b) => a - b)

  const isInstanceConflicting = (rollValue: number, rollIndex: number): boolean => {
    const col = columnIndices[rollIndex] ?? 0
    const systems = getSystemsForRoll(rollValue, col)
    if (!systems.some(s => s.isBold)) return false

    return (rollIndicesByValue[rollValue] ?? []).some((otherIndex) =>
      otherIndex !== rollIndex && (columnIndices[otherIndex] ?? 0) === col
    )
  }

  const isCardConflicting = (rollValue: number): boolean => {
    return (rollIndicesByValue[rollValue] ?? []).some((rollIndex) => isInstanceConflicting(rollValue, rollIndex))
  }

  const systemTally: Record<string, number> = rollResults.reduce((tally, roll, rollIndex) => {
    const col = columnIndices[rollIndex] ?? 0
    getSystemsForRoll(roll, col).forEach(system => {
      tally[system.name] = (tally[system.name] || 0) + 1
    })
    return tally
  }, {} as Record<string, number>)

  const tallyEntries = Object.entries(systemTally).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

  const rollValueEntries = uniqueSortedValues.map(v => [v, (rollIndicesByValue[v] ?? []).length] as [number, number])

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
                    href={`#roll-card-${value}`}
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
            {uniqueSortedValues.map(value => {
              const groupIndices = rollIndicesByValue[value] ?? []
              const count = groupIndices.length
              return (
                <div key={value} id={`roll-card-${value}`} className={`roll-row${isCardConflicting(value) ? ' roll-row--conflict' : ''}`}>
                  <div className="roll-header">
                    <span className="roll-number">Roll {value}{count > 1 ? ` ×${count}` : ''}</span>
                  </div>
                  <div className="roll-instance-list">
                    {groupIndices.map((rollIndex) => {
                      const col = columnIndices[rollIndex] ?? 0
                      const systems = getSystemsForRoll(value, col)
                      return (
                        <div key={rollIndex} className={`roll-instance-row${isInstanceConflicting(value, rollIndex) ? ' roll-instance-row--conflict' : ''}`}>
                          <div className="roll-instance-main">
                            <div className="roll-controls roll-controls--inline">
                              <button
                                onClick={() => handlePreviousColumn(rollIndex)}
                                disabled={col === 0}
                                className="nav-button"
                              >
                                ← Prev
                              </button>
                              <span className="column-badge">
                                {COLUMNS[col]}
                              </span>
                              <button
                                onClick={() => handleNextColumn(rollIndex)}
                                disabled={col === COLUMNS.length - 1}
                                className="nav-button"
                              >
                                Next →
                              </button>
                            </div>
                            <div className="systems-list systems-list--inline">
                              <ul>
                                {systems.map((system, systemIndex) => (
                                  <li key={systemIndex} className={system.isBold ? 'bold-system' : ''}>
                                    {system.name}{system.isBold ? ' (Once per turn)' : ''}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )
                    })}
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
