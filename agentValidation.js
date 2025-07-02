function validateIdentity(CIN) {
    const rejectMsg = 'Rejected: Identity pattern shows external links.';
    const approveMsg = 'Agent Approved: Identity pattern is untraceable.';

    // Reject if CIN is 1 or less
    if (CIN <= 1) {
        console.log(rejectMsg);
        return;
    }

    // Check if CIN is divisible by any number from 2 to CIN-1
    for (let i = 2; i < CIN; i++) {
        if (CIN % i === 0) {
            console.log(rejectMsg);
            return;
        }
    }

    // If no divisor found, approve
    console.log(approveMsg);
}

const CIN = 91;
validateIdentity(CIN);
