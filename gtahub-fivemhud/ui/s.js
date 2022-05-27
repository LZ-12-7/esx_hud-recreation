$(function(){
    console.log('GTAHUB HUD BY LZ AND ALKAPONE, KV DEVELOPMENT')
    window.addEventListener('message', function(event){
        let e = event.data

        // health //
        if (Math.round(e.health) < 90) {
            $('.progresshealth').css('background-color', 'rgb(76, 152, 71)');
            $('#health-icon').css('color', 'rgb(76, 152, 71)');
        };
        
        if (Math.round(e.health) < 50) {
            $('.progresshealth').css('background-color', 'rgb(214, 196, 57)');
            $('#health-icon').css('color', 'rgb(214, 196, 57)');
        }

        if (Math.round(e.health) > 90) {
            $('.progresshealth').css('background-color', 'rgb(124, 203, 215)');
            $('#health-icon').css('color', 'rgb(124, 203, 215)');
        }; 
        
        if (Math.round(e.health) <= 15 ) {
            $('.progresshealth').css('background-color', 'rgb(213, 74, 51)');
            $('#health-icon').css('color', 'rgb(213, 74, 51)');
        };
        // end health //

        // hunger //
        if (Math.round(e.hunger) < 90) {
            $('.progresshunger').css('background-color', 'rgb(76, 152, 71)');
            $('#hunger-icon').css('color', 'rgb(76, 152, 71)');
        };
        
        if (Math.round(e.hunger) < 50) {
            $('.progresshunger').css('background-color', 'rgb(214, 196, 57)');
            $('#hunger-icon').css('color', 'rgb(214, 196, 57)');
        }

        if (Math.round(e.hunger) > 90) {
            $('.progresshunger').css('background-color', 'rgb(124, 203, 215)');
            $('#hunger-icon').css('color', 'rgb(124, 203, 215)');
        }; 
        
        if (Math.round(e.hunger) <= 15 ) {
            $('.progresshunger').css('background-color', 'rgb(213, 74, 51)');
            $('#hunger-icon').css('color', 'rgb(213, 74, 51)');
        };
        // end hunger //

        // thirst //
        if (Math.round(e.thirst) < 90) {
            $('.progressthirst').css('background-color', 'rgb(76, 152, 71)');
            $('#thirst-icon').css('color', 'rgb(76, 152, 71)');
        };
        
        if (Math.round(e.thirst) < 50) {
            $('.progressthirst').css('background-color', 'rgb(214, 196, 57)');
            $('#thirst-icon').css('color', 'rgb(214, 196, 57)');
        }

        if (Math.round(e.thirst) > 90) {
            $('.progressthirst').css('background-color', 'rgb(124, 203, 215)');
            $('#thirst-icon').css('color', 'rgb(124, 203, 215)');
        }; 
        
        if (Math.round(e.thirst) <= 15 ) {
            $('.progressthirst').css('background-color', 'rgb(213, 74, 51)');
            $('#thirst-icon').css('color', 'rgb(213, 74, 51)');
        };
        // end thirst //

        // armor //
        if (Math.round(e.armor) < 90) {
            $('.progressarmor').css('background-color', 'rgb(76, 152, 71)');
            $('#armor-icon').css('color', 'rgb(76, 152, 71)');
        };
        
        if (Math.round(e.armor) < 50) {
            $('.progressarmor').css('background-color', 'rgb(214, 196, 57)');
            $('#armor-icon').css('color', 'rgb(214, 196, 57)');
        }

        if (Math.round(e.armor) > 90) {
            $('.progressarmor').css('background-color', 'rgb(124, 203, 215)');
            $('#armor-icon').css('color', 'rgb(124, 203, 215)');
        }; 
        
        if (Math.round(e.armor) <= 15 ) {
            $('.progressarmor').css('background-color', 'rgb(213, 74, 51)');
            $('#armor-icon').css('color', 'rgb(213, 74, 51)');
        };
        // end armor //
        
        if (e.action === "InVeh") {
            $('.container-car').show()
            $('.progressbargasolina').css('width', Math.round(e.fuel) + '%');
            $('.marchasprogress').css('width', Math.round(e.kmh) + '%');
            $('.trifotri').text(Math.round(e.fuel) + "");
            $('.km1').text(Math.round(e.kmh) + '');
            $('.marchas').text(Math.round(e.gear) + '');

            if (Math.round(e.kmh) < 10) {
                $('.km1').css('left', '2.85vw');
            } else if (Math.round(e.kmh) >= 10) {
                $('.km1').css('left', '2.35vw');
            };

            if (Math.round(e.kmh) >= 100) {
                $('.km1').css('left', '1.85vw');
            };
            
            if (Math.round(e.gear) == 0) {
                $('.marchas').text('R');
            } else if (Math.round(e.gear) == 1) {
                $('.marchas').text('1');
            } else if (Math.round(e.gear) == 2) {
                $('.marchas').text('2');
            } else if (Math.round(e.gear) == 3) {
                $('.marchas').text('3');
            } else if (Math.round(e.gear) == 4) {
                $('.marchas').text('4');
            } else if (Math.round(e.gear) == 5) {
                $('.marchas').text('5');
            } else if (Math.round(e.gear) == 6) {
                $('.marchas').text('6');
            };

        } else if (e.action === "outVeh") {
            $('.container-car').hide()
        }

        if (e.action === "updateHUD") {
            $('.numero-efectivo').text("$" + Math.round(e.money));
            $('.numero-banco').text("$" + Math.round(e.bank));
            $('.progresshealth').css('width', Math.round(e.health) + '%');
            $('.progressthirst').css('width', Math.round(e.thirst) + '%');
            $('.progresshunger').css('width', Math.round(e.hunger) + '%');
            $('.progressarmor').css('width', Math.round(e.armor) + '%');
        };

    });
});