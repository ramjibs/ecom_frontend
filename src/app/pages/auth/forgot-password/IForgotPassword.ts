export class IOtp {
    public Status: string;
    public Details: string;
}

export class IVerifyOtpPost {
    public otp: string;
    public Details: string;
}


export class IVerifyOtp {
    public message_code: string;
}

export class ISubmitNewPasswordPost {
    public phone_number: string;
    public password: string;
}

export class ISubmitNewPassword {
    public message_code: string;
    public token: string;
}



