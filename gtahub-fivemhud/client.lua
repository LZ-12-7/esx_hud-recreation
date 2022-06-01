local ESX = exports['es_extended']:getSharedObject()

CreateThread(function()
    while true do
            local _s = 1000
            local ped = PlayerPedId()
            ESX.TriggerServerCallback('hud:getmoney', function(money, bank)
                
                TriggerEvent('esx_status:getStatus', 'thirst', function(status)
                    thirst = status.getPercent()
                end)
                
                TriggerEvent('esx_status:getStatus', 'hunger', function(status)
                    hunger = status.getPercent()
                end)

                if money ~= nil then
                    money = money
                else
                    money = 0
                end
                if bank ~= nil then
                    bank = bank
                else
                    bank = 0
                end
                
                SendNUIMessage({
                    action = "updateHUD",
                    hunger = hunger,
                    thirst = thirst,
                    money = money,
                    bank = bank,
                    health = (GetEntityHealth(ped) -100),
                    armor = GetPedArmour(ped)
                })

            end)

            if IsPauseMenuActive() then
                SendNUIMessage({action = "hide"})
            else
                SendNUIMessage({action = "show"})
            end

        Wait(_s)
    end
end)

CreateThread(function()
    while true do
        local _s = 2000
        if IsPedInAnyVehicle(PlayerPedId(), false) then
            _s = 100
            SendNUIMessage({
                action = "InVeh";
                fuel   = GetVehicleFuelLevel(GetVehiclePedIsIn(PlayerPedId(), false));
                kmh    = (GetEntitySpeed(GetVehiclePedIsIn(PlayerPedId(), false)) * 3.6);
                gear = GetVehicleCurrentGear(GetVehiclePedIsIn(PlayerPedId(), false));
            })
        elseif not IsPedInAnyVehicle(PlayerPedId()) then
            SendNUIMessage({ action = "outVeh"; })
        end
        
        if IsPedInAnyVehicle(PlayerPedId(), false) and IsPauseMenuActive() then
            SendNUIMessage({ action = "outVeh"; })
        end
        Wait(_s)
    end
end)
