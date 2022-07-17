function DateItem() {
  
    setInterval(
      () => {
        const date = new Date().toTimeString();
        return (
        <div>
          <span> {date} </span>
        </div>
        );
      }, 1000)
}

export default DateItem;