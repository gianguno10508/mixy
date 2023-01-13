const FormatDate = ({dateFormat}) => {
    var numDate= new Date(dateFormat);
    const date = `${numDate.getDate()}`;
    const year = `${numDate.getFullYear()}`;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    let month = monthNames[numDate.getMonth()];
    return(
        <span className="today-text">
            {`${month} ${date}, ${year}`}
        </span>
    )
}
export default FormatDate;