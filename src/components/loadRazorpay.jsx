const loadRazorpayScript = (redirectUrl) => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => {
            resolve(true);
            if (redirectUrl) {
                window.location.href = redirectUrl;
            }
        };
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

export default loadRazorpayScript;
