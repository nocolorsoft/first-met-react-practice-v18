import React, {useState} from "react";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevState) => !prevState);
    };

    return(
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인" : "확인 안됨"}
        </button>
    );
}

export default ConfirmButton;