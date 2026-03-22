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
    [{ name: 'Aft Hull', isBold: true }],
    // Column F
    [{ name: 'Left Warp Engine', isBold: false }],
    // Column G
    [{ name: 'Transporter', isBold: false }],
    // Column H
    [{ name: 'Tractor Beam', isBold: false }],
    // Column I
    [{ name: 'Shuttle', isBold: false }],
    // Column J
    [{ name: 'Lab', isBold: false }],
    // Column K
    [{ name: 'Forward Hull', isBold: false }],
    // Column L
    [{ name: 'Right Warp Engine', isBold: false }],
    // Column M
    [{ name: 'Excess Damage', isBold: false }]
  ],
  3: [
    [{ name: 'Drone', isBold: true }],
    [{ name: 'Phaser', isBold: true }],
    [{ name: 'Impulse', isBold: false }],
    [{ name: 'Left Warp Engine', isBold: false }],
    [{ name: 'Right Warp Engine', isBold: false }],
    [{ name: 'Aft Hull', isBold: false }],
    [{ name: 'Shuttle', isBold: false }],
    [{ name: 'Damage Control', isBold: false }],
    [{ name: 'Center Warp Engine', isBold: false }],
    [{ name: 'Lab', isBold: false }],
    [{ name: 'Battery', isBold: false }],
    [{ name: 'Phaser', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ],
  4: [
    [{ name: 'Phaser', isBold: true }],
    [{ name: 'Transporter', isBold: true }],
    [{ name: 'Right Warp Engine', isBold: false }],
    [{ name: 'Impulse', isBold: false }],
    [{ name: 'Forward Hull', isBold: false }],
    [{ name: 'Aft Hull', isBold: false }],
    [{ name: 'Left Warp Engine', isBold: false }],
    [{ name: 'APR', isBold: false }],
    [{ name: 'Lab', isBold: false }],
    [{ name: 'Transporter', isBold: false }],
    [{ name: 'Probe', isBold: false }],
    [{ name: 'Center Warp Engine', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ],
  5: [
    [{ name: 'Right Warp Engine', isBold: true }],
    [{ name: 'Aft Hull', isBold: false }],
    [{ name: 'Cargo', isBold: false }],
    [{ name: 'Battery', isBold: false }],
    [{ name: 'Shuttle', isBold: false }],
    [{ name: 'Torpedo', isBold: true }],
    [{ name: 'Left Warp Engine', isBold: false }],
    [{ name: 'Impulse', isBold: false }],
    [{ name: 'Right Warp Engine', isBold: false }],
    [{ name: 'Tractor Beam Probe', isBold: false }],
    [{ name: 'Any Weapon', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ],
  6: [
    [{ name: 'Forward Hull', isBold: false }],
    [{ name: 'Impulse', isBold: false }],
    [{ name: 'Lab', isBold: false }],
    [{ name: 'Left Warp Engine', isBold: false }],
    [{ name: 'Sensor', isBold: true }],
    [{ name: 'Tractor Beam', isBold: false }],
    [{ name: 'Shuttle', isBold: false }],
    [{ name: 'Right Warp Engine', isBold: false }],
    [{ name: 'Phaser', isBold: false }],
    [{ name: 'Transporter', isBold: false }],
    [{ name: 'Battery', isBold: false }],
    [{ name: 'Any Weapon', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ],
  7: [
    [{ name: 'Cargo', isBold: false }],
    [{ name: 'Forward Hull', isBold: false }],
    [{ name: 'Battery', isBold: false }],
    [{ name: 'Center Warp Engine', isBold: false }],
    [{ name: 'Shuttle', isBold: false }],
    [{ name: 'APR', isBold: false }],
    [{ name: 'Lab', isBold: false }],
    [{ name: 'Phaser', isBold: false }],
    [{ name: 'Any Warp Engine', isBold: false }],
    [{ name: 'Probe', isBold: false }],
    [{ name: 'Aft Hull', isBold: false }],
    [{ name: 'Any Weapon', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ],
  8: [
    [{ name: 'Aft Hull', isBold: false }],
    [{ name: 'APR', isBold: false }],
    [{ name: 'Shuttle', isBold: false }],
    [{ name: 'Right Warp Engine', isBold: false }],
    [{ name: 'Scanner', isBold: true }],
    [{ name: 'Tractor Beam', isBold: false }],
    [{ name: 'Lab', isBold: false }],
    [{ name: 'Left Warp Engine', isBold: false }],
    [{ name: 'Phaser', isBold: false }],
    [{ name: 'Transporter', isBold: false }],
    [{ name: 'Battery', isBold: false }],
    [{ name: 'Any Weapon', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ],
  9: [
    [{ name: 'Left Warp Engine', isBold: true }],
    [{ name: 'Forward Hull', isBold: false }],
    [{ name: 'Cargo', isBold: false }],
    [{ name: 'Battery', isBold: false }],
    [{ name: 'Lab', isBold: false }],
    [{ name: 'Drone', isBold: true }],
    [{ name: 'Right Warp Engine', isBold: false }],
    [{ name: 'Impulse', isBold: false }],
    [{ name: 'Left Warp Engine', isBold: false }],
    [{ name: 'Tractor Beam', isBold: false }],
    [{ name: 'Probe', isBold: false }],
    [{ name: 'Any Weapon', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ],
  10: [
    [{ name: 'Phaser', isBold: true }],
    [{ name: 'Tractor Beam', isBold: true }],
    [{ name: 'Left Warp Engine', isBold: false }],
    [{ name: 'Impulse', isBold: false }],
    [{ name: 'Aft Hull', isBold: false }],
    [{ name: 'Forward Hull', isBold: false }],
    [{ name: 'Right Warp Engine', isBold: false }],
    [{ name: 'APR', isBold: false }],
    [{ name: 'Lab', isBold: false }],
    [{ name: 'Transporter', isBold: false }],
    [{ name: 'Probe', isBold: false }],
    [{ name: 'Center Warp Engine', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ],
  11: [
    [{ name: 'Torpedo', isBold: true }],
    [{ name: 'Phaser', isBold: true }],
    [{ name: 'Impulse', isBold: false }],
    [{ name: 'Right Warp Engine', isBold: false }],
    [{ name: 'Left Warp Engine', isBold: false }],
    [{ name: 'Forward Hull', isBold: false }],
    [{ name: 'Tractor Beam', isBold: false }],
    [{ name: 'Damage Control', isBold: true }],
    [{ name: 'Center Warp Engine', isBold: false }],
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
    [{ name: 'Forward Hull', isBold: true }],
    [{ name: 'Right Warp Engine', isBold: false }],
    [{ name: 'Transporter', isBold: false }],
    [{ name: 'Shuttle', isBold: false }],
    [{ name: 'Tractor Beam', isBold: false }],
    [{ name: 'Lab', isBold: false }],
    [{ name: 'Aft Hull', isBold: false }],
    [{ name: 'Left Warp Engine', isBold: false }],
    [{ name: 'Excess Damage', isBold: false }]
  ]
};

// Column headers
export const COLUMNS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];

