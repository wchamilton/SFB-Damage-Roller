import { useState } from 'react'
import './App.css'
import { damageTable, COLUMNS, DamageSystem } from './damageTable'

function App() {
  const [damageInput, setDamageInput] = useState<string>('1')
  const [rollResults, setRollResults] = useState<number[]>([])
  const [columnIndices, setColumnIndices] = useState<number[]>([])
  const [showResults, setShowResults] = useState<boolean>(false)

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

  if (showResults) {
    return (
      <div className="container">
        <h1>SFB Damage Allocation</h1>
        
        <div className="results-section">
          <div className="rolls-container">
            {rollResults.map((roll, rollIndex) => {
              const systems = getSystemsForRoll(roll, columnIndices[rollIndex])
              return (
                <div key={rollIndex} className="roll-row">
                  <div className="roll-header">
                    <span className="roll-number">Roll {rollIndex + 1}: {roll}</span>
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
