import { getByBookingNumber } from "../services/booking";

const bookingNumber = async (): Promise<number> => {
    let number = 0;
    for (let i = 0; i < 5; i++) {
        number += Math.floor(Math.random() * 10);
    }
    const booking = await getByBookingNumber(number);
    console.log(booking);
    if (booking) {
        return bookingNumber();
    }
    return number;
};

export { bookingNumber };