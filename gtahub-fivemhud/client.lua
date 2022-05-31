local ESX = {}

CreateThread(function()
    while (true) do
        TriggerEvent('esx:getSharedObject', function(obj) 
            ESX = obj 
        end)
        Wait(7000)
    end

    while (ESX.GetPlayerData().job.name ~= nil) do
        Wait(250)
    end

    ESX.PlayerData = ESX.GetPlayerData()
end)

CreateThread(function()
    local money = nil
    local bank = nil
    
    while (true) do

        while (not money and not bank) do
            Wait(500)
        end

        for k,v in pairs(ESX.PlayerData.accounts) do
            if v.name == "money" then 
                money = v.money
            elseif v.name == "bank" then
                bank = v.money
            end
        end

        TriggerEvent('esx_status:getStatus', 'hunger', function(status) 
            hunger = math.ceil(status.val / 10000)
        end)
        TriggerEvent('esx_status:getStatus', 'thirst', function(status) 
            thirst = math.ceil(status.val / 10000)
        end)
        
        SendNUIMessage({
            action = "updateHUD",
            hunger = hunger,
            thirst = thirst,
            money = money,
            bank = bank,
            health = math.ceil(GetEntityHealth(PlayerPedId()) / 2),
            armor = GetPedArmour(PlayerPedId())
        })
        Wait(1000)
    end
end)

CreateThread(function()
    while true do
        local _s = 2000
        if IsPedInAnyVehicle(PlayerPedId()) then
            _s = 170
            SendNUIMessage({
                action = "InVeh";
                fuel   = GetVehicleFuelLevel(GetVehiclePedIsIn(PlayerPedId(), false));
                kmh    = (GetEntitySpeed(GetVehiclePedIsIn(PlayerPedId(), false)) * 3.6);
                gear = GetVehicleCurrentGear(GetVehiclePedIsIn(PlayerPedId(), false));
            })
        elseif not IsPedInAnyVehicle(PlayerPedId()) then
            SendNUIMessage({ action = "outVeh"; })
        end
        Wait(_s)
    end
end)
