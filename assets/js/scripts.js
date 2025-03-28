        $(document).ready(function () {
           
            function displayout(value) {
                $('#display').val($('#display').val() + value);
            }

     
            $('#clear').click(function () {
                $('#display').val('');
            });

            $('#delete').click(function () {
                let currentValue = $('#display').val();
                $('#display').val(currentValue.slice(0, -1));
            });


            $('#dot').click(function () {
                let currentValue = $('#display').val();
                if (!currentValue.includes('.')) {
                    $('#display').val(currentValue + '.');
                }
            });


            $('#percent').click(function () {
                let currentValue = $('#display').val();
                if (currentValue) {
                    $('#display').val(currentValue / 100);
                }
            });


            $('#equals').click(function () {
                let currentValue = $('#display').val();
                if (currentValue) {
                    try {
                        let result = eval(currentValue);
                        $('#display').val(result);
                    } catch (e) {
                        $('#display').val('Error');
                    }
                }
            });

       
            $('#divide').click(function () { displayout('/') });
            $('#multiply').click(function () { displayout('*') });
            $('#subtract').click(function () { displayout('-') });
            $('#add').click(function () { displayout('+') });

        
            $('#seven').click(function () { displayout('7') });
            $('#eight').click(function () { displayout('8') });
            $('#nine').click(function () { displayout('9') });
            $('#four').click(function () { displayout('4') });
            $('#five').click(function () { displayout('5') });
            $('#six').click(function () { displayout('6') });
            $('#one').click(function () { displayout('1') });
            $('#two').click(function () { displayout('2') });
            $('#three').click(function () { displayout('3') });
            $('#doubleZero').click(function () { displayout('00') });
            $('#zero').click(function () { displayout('0') });
        });