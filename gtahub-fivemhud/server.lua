ESX = exports['es_extended']:getSharedObject()

ESX.RegisterServerCallback('hud:getmoney', function(source, cb)
    local src = source    
    local xPlayer = ESX.GetPlayerFromId(src)
    local money = xPlayer.getMoney()
    local bank = xPlayer.getAccount('bank').money
    cb(money, bank)
end)
