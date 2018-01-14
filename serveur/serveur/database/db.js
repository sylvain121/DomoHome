

const db  = [
  {
    uuid: "110e8400-e29b-11d4-a716-446655440000",
    driver: "infared",
    target: [target.AIRTON, target.TV, target.SOUND_BAR, target.DVD_PLAYER],
    position: position.SALON,
  }
];


const target = {
  AIRTON: 'target.airton',
  TV: 'target.tv',
  SOUND_BAR: 'target.sound_bar',
  DVD_PLAYER: 'target.dvd_player'
}


const position = {
  SALON: 'position.salon'
}

module.exports = {
  position,
  target,
  db
}
