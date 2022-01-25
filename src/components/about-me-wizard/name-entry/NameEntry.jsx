import * as React from 'react'

export default function NameEntry(props) {
    const [firstName, setFirstName] = React.useState(props.firstName);
    const [lastName, setLastName] = React.useState(props.lastName);
    const handleClick = () => {
        props.onSave({ firstName: firstName, lastName: lastName });
    }
    return (
        <div>
            <div>
                <input type="text"
                    placeholder="first name"
                    value={firstName}
                    autoComplete="off"
                    onChange={(e) => setFirstName(e.target.value)} />
                <input type="text"
                    placeholder="last name"
                    value={lastName}
                    autoComplete="off"
                    onChange={(e) => setLastName(e.target.value)} />
                <button onClick={handleClick}>Add Name</button>
            </div>
        </div>
    )
}
