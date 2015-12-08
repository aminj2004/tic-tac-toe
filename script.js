var ids = $('.identity');http://jsfiddle.net/AminJ/e1v3fwdt/10/#run

var cells = [];
for (var i = 0; i < 3; i++) {
    var row = [];
    for (var j = 0; j < 3; j++) {
	    row.push($(ids[i * 3 + j]));
    }
    
    cells.push(row);
}

function reset() {
	$('.identity').html('').removeClass('xset').removeClass('oset');
    turn = 0;
}

var turn = 1;

function checkThree(a, b, c) {
    if (a.hasClass('xset') && b.hasClass('xset') && c.hasClass('xset')) {
        return 'x'
    } else if (a.hasClass('oset') && b.hasClass('oset') && c.hasClass('oset')) {
        return 'o';
    } else {
        return '';
    }
}

$('.identity').click(function(e) {
    var cell = e.target;
    
    if ($(cell).hasClass('xset') || $(cell).hasClass('oset')) return;
    
    if(turn % 2 == 1) {
        $(cell).addClass('xset');
        $(cell).html('X');
    } else if (turn % 2 == 0) {
        $(cell).addClass('oset');
        $(cell).html('O');
    }
    
    //from now on horizontaly 
    for (var i = 0; i < 3; i++) {
        var winner = checkThree(cells[i][0], cells[i][1], cells[i][2]);
        
        if (winner == 'x') {
            alert('x wins');
	        reset();
        } else if (winner == 'o') {
        	alert('o wins');
            reset();
        }
    }

    //from now on vertically
    for (var i = 0; i < 3; i++) {
        var winner = checkThree(cells[0][i], cells[1][i], cells[2][i]);
        
        if (winner == 'x') {
            alert('x wins');
	        reset();
        } else if (winner == 'o') {
        	alert('o wins');
            reset();
        }
    }

	// from now on is diagonally

    var winner = checkThree(cells[0][2], cells[1][1], cells[2][0]);
        
    if (winner == 'x') {
        alert('x wins');
        reset();
    } else if (winner == 'o') {
        alert('o wins');
        reset();
    }

    
    winner = checkThree(cells[0][0], cells[1][1], cells[2][2]);
        
    if (winner == 'x') {
        alert('x wins');
        reset();
    } else if (winner == 'o') {
        alert('o wins');
        reset();
    }

    
	// it's a tie
    if (turn === 9){
    	alert("it's a tie");   
        reset();
    }
    
    turn++;
});
