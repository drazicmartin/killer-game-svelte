export function GetGameStatusColor(game) {
    if (game?.is_finish) return "red"
    else if (game?.is_started) return "green"
    return "orange"
}