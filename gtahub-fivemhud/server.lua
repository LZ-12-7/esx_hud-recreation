ESX = exports['es_extended']:getSharedObject()

ESX.RegisterServerCallback('hud:getmoney', function(source, cb)
    local xPlayer = ESX.GetPlayerFromId(source)
    local money = xPlayer.getMoney()
    local bank = xPlayer.getAccount('bank').money
    cb(money, bank)
end)