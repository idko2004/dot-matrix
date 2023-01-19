
function drawChar(charToDraw, charListIndex)
{
    const dots = charList[charListIndex].children[0].children;

    for(let i = 0; i < dots.length; i++)
    {
        const row = parseInt(dots[i].attributes.row.value) - 1;
        const column = parseInt(dots[i].attributes.column.value) - 1;

        const paintThisDot = charMap[charToDraw][row][column] === 1;

        if(paintThisDot)
        {
            dots[i].classList.add('on');
        }
    }
}