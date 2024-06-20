function showSidebar() {
    $('.header__navbar-sidebar').css('display', 'flex');
}

function closeSidebar() {
    $('.header__navbar-sidebar').css('display', 'none');
}

$(document).ready(function() {
    const countDownDate = new Date("Jun 28, 2025 00:00:00").getTime();
    const countdownFunction = setInterval(() => {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the countdown date
        const distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result in the elements with ids
        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);
        
        // If the countdown is over, write some text
        if (distance < 0) {
            clearInterval(countdownFunction);
            $("#countdown").text("EXPIRED");
        }
    }, 1000);
});
