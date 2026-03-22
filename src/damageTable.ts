export interface DamageSystem {
  name: string;
  isBold: boolean;
}

export type DamageRow = DamageSystem[][];

export const damageTable: Record<number, DamageSystem[][]> = {
  2: [
    // Column A
    [{ name: 'Bridge', isBold: true }],
    // Column B
    [{ name: 'Flag Bridge', isBold: true }],
    // Column C
    [{ name: 'Sensor', isBold: true }],
    // Column D
    [{ name: 'Damage Control', isBold: true }],
    // Column E
    [{ name: 'A Hull', isBold: true }],
    // Column F
    [{ name: 'Left W En', isBold: false }],
    // Column G
    [{ name: 'Trans', isBold: false }],
    // Column H
    [{ name: 'Tractor', isBold: false }],
    // Column I
    [{ name: 'Shuttle', isBold: false }],
    // Column J
    [{ name: 'Lab', isBold: false }],
    // Column K
    [{ name: 'F Hull', isBold: false }],
    // Column L
    [{ name: 'Right W En', isBold: false }],
    // Column M
    [{ name: 'Excess Damage', isBold: false }]
  ],
  3: [
    [{ name: 'Drone', isBold: true }],
    [{ name: 'Phaser', isBold: true }],
    [{ name: 'Impulse', isBold: false }],
    [{ name: 'Left W En', isBold: false }],
    [{ name: 'Right W En', isBold: false }],
    [{ name: 'A Hull', isBold: false }],
    [{ name: 'Shuttle', isBold: false }],
    [{ name: 'Damage Control', isBold: false }],
    [{ name: 'Center W En', isBold: false }],
    [{ name: 'Lab', isBold: false }],
    [{ name: 'Battery', isBold: false }],
    [{ name: 'Phaser', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ],
  4: [
    [{ name: 'Phaser', isBold: true }],
    [{ name: 'Trans', isBold: true }],
    [{ name: 'Right W En', isBold: false }],
    [{ name: 'Impulse', isBold: false }],
    [{ name: 'F Hull', isBold: false }],
    [{ name: 'A Hull', isBold: false }],
    [{ name: 'Left W En', isBold: false }],
    [{ name: 'APR', isBold: false }],
    [{ name: 'Lab', isBold: false }],
    [{ name: 'Trans', isBold: false }],
    [{ name: 'Probe', isBold: false }],
    [{ name: 'Center W En', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ],
  5: [
    [{ name: 'Right W En', isBold: true }],
    [{ name: 'A Hull', isBold: false }],
    [{ name: 'Cargo', isBold: false }],
    [{ name: 'Battery', isBold: false }],
    [{ name: 'Shuttle', isBold: false }],
    [{ name: 'Torp', isBold: true }],
    [{ name: 'Left W En', isBold: false }],
    [{ name: 'Impulse', isBold: false }],
    [{ name: 'Right W En', isBold: false }],
    [{ name: 'Tractor Probe', isBold: false }],
    [{ name: 'Any Weapon', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ],
  6: [
    [{ name: 'F Hull', isBold: false }],
    [{ name: 'Impulse', isBold: false }],
    [{ name: 'Lab', isBold: false }],
    [{ name: 'Left W En', isBold: false }],
    [{ name: 'Sensor', isBold: true }],
    [{ name: 'Tractor', isBold: false }],
    [{ name: 'Shuttle', isBold: false }],
    [{ name: 'Right W En', isBold: false }],
    [{ name: 'Phaser', isBold: false }],
    [{ name: 'Trans', isBold: false }],
    [{ name: 'Battery', isBold: false }],
    [{ name: 'Any Weapon', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ],
  7: [
    [{ name: 'Cargo', isBold: false }],
    [{ name: 'F Hull', isBold: false }],
    [{ name: 'Battery', isBold: false }],
    [{ name: 'Center W En', isBold: false }],
    [{ name: 'Shuttle', isBold: false }],
    [{ name: 'APR', isBold: false }],
    [{ name: 'Lab', isBold: false }],
    [{ name: 'Phaser', isBold: false }],
    [{ name: 'Any W En', isBold: false }],
    [{ name: 'Probe', isBold: false }],
    [{ name: 'A Hull', isBold: false }],
    [{ name: 'Any Weapon', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ],
  8: [
    [{ name: 'A Hull', isBold: false }],
    [{ name: 'APR', isBold: false }],
    [{ name: 'Shuttle', isBold: false }],
    [{ name: 'Right W En', isBold: false }],
    [{ name: 'Scanner', isBold: true }],
    [{ name: 'Tractor', isBold: false }],
    [{ name: 'Lab', isBold: false }],
    [{ name: 'Left W En', isBold: false }],
    [{ name: 'Phaser', isBold: false }],
    [{ name: 'Trans', isBold: false }],
    [{ name: 'Battery', isBold: false }],
    [{ name: 'Any Weapon', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ],
  9: [
    [{ name: 'Left W En', isBold: true }],
    [{ name: 'F Hull', isBold: false }],
    [{ name: 'Cargo', isBold: false }],
    [{ name: 'Battery', isBold: false }],
    [{ name: 'Lab', isBold: false }],
    [{ name: 'Drone', isBold: true }],
    [{ name: 'Right W En', isBold: false }],
    [{ name: 'Impulse', isBold: false }],
    [{ name: 'Left W En', isBold: false }],
    [{ name: 'Tractor', isBold: false }],
    [{ name: 'Probe', isBold: false }],
    [{ name: 'Any Weapon', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ],
  10: [
    [{ name: 'Phaser', isBold: true }],
    [{ name: 'Tractor', isBold: true }],
    [{ name: 'Left W En', isBold: false }],
    [{ name: 'Impulse', isBold: false }],
    [{ name: 'A Hull', isBold: false }],
    [{ name: 'F Hull', isBold: false }],
    [{ name: 'Right W En', isBold: false }],
    [{ name: 'APR', isBold: false }],
    [{ name: 'Lab', isBold: false }],
    [{ name: 'Trans', isBold: false }],
    [{ name: 'Probe', isBold: false }],
    [{ name: 'Center W En', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ],
  11: [
    [{ name: 'Torp', isBold: true }],
    [{ name: 'Phaser', isBold: true }],
    [{ name: 'Impulse', isBold: false }],
    [{ name: 'Right W En', isBold: false }],
    [{ name: 'Left W En', isBold: false }],
    [{ name: 'F Hull', isBold: false }],
    [{ name: 'Tractor', isBold: false }],
    [{ name: 'Damage Control', isBold: true }],
    [{ name: 'Center W En', isBold: false }],
    [{ name: 'Lab', isBold: false }],
    [{ name: 'Battery', isBold: false }],
    [{ name: 'Phaser', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ],
  12: [
    [{ name: 'Aux Control', isBold: true }],
    [{ name: 'Emer Bridge', isBold: true }],
    [{ name: 'Scanner', isBold: true }],
    [{ name: 'Probe', isBold: true }],
    [{ name: 'F Hull', isBold: true }],
    [{ name: 'Right W En', isBold: false }],
    [{ name: 'Trans', isBold: false }],
    [{ name: 'Shuttle', isBold: false }],
    [{ name: 'Tractor', isBold: false }],
    [{ name: 'Lab', isBold: false }],
    [{ name: 'A Hull', isBold: false }],
    [{ name: 'Left W En', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ]
};

// Column headers
export const COLUMNS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
