import './Office.css';

const Office = ({ name, mail, num , street, phone, goToMapOffice, office }) => {

    return (
        <div className="details-office">
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">{name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mail :</td>
                        <td>{mail}</td>
                    </tr>
                    <tr>
                        <td>Address :</td>
                        <td>{num}&nbsp;&nbsp;{street}</td>
                    </tr>
                    <tr>
                        <td>Phone :</td>
                        <td>{phone}</td>
                    </tr>
                </tbody>
            </table>
            <div className="details-office-link" onClick={() => { goToMapOffice(office) }}>
                <span>View on Map</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><path fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2" d="M15 1l9 9-9 9M0 10h24"></path></svg>
            </div>
        </div>
    );
}

export default Office;