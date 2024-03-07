
export function FronEnd() {
    return(
        <>
        {/* <table>
            <tr>
                <td onMouseEnter={alert(1)}>test</td>
            </tr>
        </table> */}

        {/* <form draggable={true} ondragend={alert(1)}>test</form> */}

        <strong draggable={true} ondragstart={alert(1)}>test</strong>
        </>
    )
}
