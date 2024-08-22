// used in /components/Main/AboutUsBlocks/TeamBlock

export interface IDataTeamLink {
    name: string,
    link: string
};

export interface IDataTeamWorker {
    id: string,
    name: string,
    profession: string,
    photo: string,
    links: IDataTeamLink[]
};

export const dataTeam: IDataTeamWorker[] = [
    {
        id: '1',
        name: 'Giovani Bacardo', 
        profession: 'Farmer',
        photo: 'GiovaniBacardo',
        links: [
            {
                name: 'facebook',
                link: 'https://www.facebook.com/'
            },
            {
                name: 'twitter',
                link: 'https://www.twitter.com/'
            }
        ]
    },
    {
        id: '2',
        name: 'Marianne Loreno', 
        profession: 'Designer',
        photo: 'MarianneLoreno',
        links: [
            {
                name: 'instagram',
                link: 'https://www.instagram.com/'
            },
            {
                name: 'facebook',
                link: 'https://www.facebook.com/'
            },
            {
                name: 'twitter',
                link: 'https://www.twitter.com/'
            }
        ]
    },
    {
        id: '3',
        name: 'Riga Pelore', 
        profession: 'Farmer',
        photo: 'RigaPelore',
        links: [
            {
                name: 'instagram',
                link: 'https://www.instagram.com/'
            },
            {
                name: 'twitter',
                link: 'https://www.twitter.com/'
            }
        ]
    },
    {
        id: '4',
        name: 'Keira Knightley', 
        profession: 'Farmer',
        photo: 'KeiraKnightley',
        links: [
            {
                name: 'instagram',
                link: 'https://www.instagram.com/'
            },
            {
                name: 'facebook',
                link: 'https://www.facebook.com/'
            }
        ]
    },
    {
        id: '5',
        name: 'Scott Lawrence', 
        profession: 'Designer',
        photo: 'ScottLawrence',
        links: [
            {
                name: 'instagram',
                link: 'https://www.instagram.com/'
            },
            {
                name: 'facebook',
                link: 'https://www.facebook.com/'
            },
            {
                name: 'twitter',
                link: 'https://www.twitter.com/'
            }
        ]
    },
    {
        id: '5',
        name: 'Karen Allen', 
        profession: 'Farmer',
        photo: 'KarenAllen',
        links: [
            {
                name: 'instagram',
                link: 'https://www.instagram.com/'
            }
        ]
    },
];