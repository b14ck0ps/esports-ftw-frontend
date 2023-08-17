interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    picture?: string;
}

export interface Player extends User {
    ign: string;
    joinDate: Date;
    salary: number;
    playHours: number;
    dob: Date;
    address: PlayerAddress;
    socialLinks: PlayerSocialLink;
    playerPhones: PlayerPhone[];
    playerWinnings: PlayerWinning[];
    team: Team;
}

interface PlayerAddress {
    id: number;
    country: string;
    city: string;
    street: string;
    zipCode: string;
}

interface PlayerSocialLink {
    id: number;
    facebookLink: string;
    instagramLink: string;
    twitterLink: string;
    youtubeLink: string;
}

interface PlayerPhone {
    id: number;
    phone: string;
}

interface PlayerWinning {
    id: number;
    winning: string;
}

interface Team {
    id: number;
    name: string;
}

export interface Countries {
    [key: string]: string;
}