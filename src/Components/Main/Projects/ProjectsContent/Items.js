import Gym from '../../../Images/Projects/gym.jpg';
import Spotify from '../../../Images/Projects/spotify.jpg';
import Netflix from '../../../Images/Projects/netflix.png';

const repo_url = "https://www.github.com/cmatt7/";

export const items = {
    gym: {
        img: Gym,
        alt: 'Gym Photo',
        title: 'Gym App',
        visit: '',
        repo: `${repo_url}gym-webapp`
    },
    spotify: {
        img: Spotify,
        alt: 'Spotify Logo Image',
        title: 'Spotify',
        visit: '',
        repo: `${repo_url}spotify-app`
    },
    netflix: {
        img: Netflix,
        alt: 'Netflix Logo Image',
        title: 'Netflix',
        visit: '',
        repo: `${repo_url}netflix-app`
    },
    mentalhealth: {
        img: '',
        alt: '',
        title: 'Mental Health',
        visit: '',
        repo: `${repo_url}`
    }
}