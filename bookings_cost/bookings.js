function bookingCost(booking) {
    let discountFactor = 1;
    let bookingCost = 45 * booking.duration;
    
    if (booking.check_in_day == "Wednesday") {
        discountFactor = 0.75;

    }
    else if (booking.check_in_day == "Friday") {
        discountFactor = 0.85;
    }
    return bookingCost * discountFactor

}
