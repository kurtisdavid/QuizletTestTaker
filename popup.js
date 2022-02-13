var counter = 0;
window.onkeydown = function (event) {
    const valid_keys = ['1', '2', '3', '4'];
    if (valid_keys.includes(event.key)) {
        var mc_select = "#mcq-" + counter + " [data-testid='option-" + event.key + "']";
        $(mc_select).click()
        counter++;
    } else if (event.key == 'Backspace') {
        counter--;
    }
    // $("#mcq-" + counter).attr('class','s1m93kwi wbkjose');
}