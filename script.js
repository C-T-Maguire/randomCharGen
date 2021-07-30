//gender
const genders = ['Male', 'Female'];
let charGender = '';
const genGender = () => {
    let i = Math.floor(Math.random() *2);
    charGender = genders[i];
    return charGender;
}
genGender();

//race
const races = ['Dragonborn', 'High-Elf', 'Wood-Elf', 'Half-Elf', 'Drow', 'Human', 'Dwarf', 'Gnome', 'Halfling', 'Half-Orc', 'Tiefling'];
let charRace = '';
const genRace = () => {
    let i = Math.floor(Math.random() * (races.length-1));
    charRace = races[i];
    return charRace;
}
genRace();

//name
const dragonMFN = ['Arjhan', 'Balasar', 'Bharash', 'Donaar', 'Ghesh', 'Heskan', 'Kriv', 'Medrash', 'Mehen', 'Nadarr', 'Pandjed', 'Patrin', 'Rhogar', 'Shamash', 'Shedinn', 'Tarhun', 'Torinn'];
const dragonFFN = ['Akra', 'Biri', 'Daar', 'Farideh', 'Harann', 'Havilar', 'Jheri', 'Kava', 'Korinn', 'Mishann', 'Nala', 'Perra', 'Raiann', 'Sora', 'Surina', 'Thava', 'Uadjit'];
const dragonSN = ['Clethinthiallor', 'Daardemdroam', 'Delmirev', 'Drachedandion', 'Fenkenkabradon', 'Kepeshkmolik', 'Kerrhylon', 'Kimbatuul', 'Linxakasendalor', 'Myastan', 'Nemmonis', 'Norixius', 'Ophinshtalajiir', 'Prexijandilin', 'Shestendeliath', 'Turnuroth', 'Verthisathurgiesh', 'Yarjerit'];

const dwarfMFN = ['Alberich', 'Baern', 'Barendd', 'Brottor', 'Bruenor', 'Dain', 'Darrak', 'Delg', 'Eberk', 'Einkil', 'Fargrim', 'Flint', 'Gardain', 'Harbek', 'Kildrak', 'Morgran', 'Orsik', 'Oskar', 'Rangrim', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Veit', 'Vondal'];
const dwarfFFN = ['Amber', 'Artin', 'Audhild', 'Bardryn', 'Dagnal', 'Diesa', 'Eldeth', 'Falkrun', 'Finellen', 'Gunnloda', 'Gurdis', 'Helja', 'Hlin', 'Kathra', 'Kristryd', 'Ilde', 'Liftrasa', 'Mardred', 'Riswynn', 'Sannl', 'Torbera', 'Torgga', 'Vistra'];
const dwarfSN = ['Balderk', 'Battlehammer', 'Brawnanvil', 'Dankil', 'Fireforge', 'Frostbeard', 'Gorunn', 'Holderhek', 'Ironfist', 'Loder', 'Lutgehr', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart'];

const elfMFN = ['Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 'Beiro', 'Berrian', 'Carric', 'Enialis', 'Erdan', 'Erevan', 'Galinndan', 'Hadarai', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Laucian',  'Mindartis', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Thamior', 'Tharivol', 'Theren', 'Varis'];
const elfFFN = ['Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Bethrynna', 'Birel', 'Caelynn', 'Drusilia', 'Enna', 'Felosial', 'Ielenia', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Meriele', 'Mialee', 'Naivara', 'Quelenna', 'Quillathe', 'Sariel', 'Shanairra', 'Shava', 'Silaqui', 'Theirastra', 'Thia', 'Vadania', 'Valanthe', 'Xanaphia'];
const elfSN = ['Amakir', 'Amastacia', 'Galanodel', 'Holimion', 'Ilphelkiir', 'Liadon', 'Meliamne', 'Nailo', 'Siannodel', 'Xiloscient'];

const gnomeMFN = ['Alston', 'Alvyn', 'Boddynock', 'Brocc', 'Burgell', 'Dimble', 'Eldon', 'Erky', 'Fonkin', 'Frug', 'Gerbo', 'Gimble', 'Glim', 'Jebeddo', 'Kellen', 'Namfoodle', 'Orryn', 'Seebo', 'Sindri', 'Warryn', 'Wrenn', 'Zook'];
const gnomeFFN= ['Bimpnottin', 'Breena', 'Caramip', 'Carlin', 'Donella', 'Duvamil', 'Ella', 'Ellyjobell', 'Ellywick', 'Lilli', 'Loopmottin', 'Lorilla', 'Mardnab', 'Nissa', 'Nyx', 'Oda', 'Orla', 'Roywyn', 'Shamil', 'Tana', 'Waywocket', 'Zanna'];
const gnomeSN =['Beren', 'Daergel', 'Folkor', 'Garrick', 'Nackle', 'Murnig', 'Ningel', 'Raulnor', 'Scheppen', 'Timbers', 'Turen'];

const halflingMFN = ['Alton', 'Ander', 'Cade', 'Corrin', 'Eldon', 'Errich', 'Finnan', 'Garret', 'Lindal', 'Lyle', 'Merric', 'Milo', 'Osborn', 'Perrin', 'Reed', 'Roscoe', 'Wellby'];
const halflingFFN = ['Andry', 'Bree', 'Callie', 'Cora', 'Euphemia', 'Jillian', 'Kithri', 'Lavinia', 'Lidda', 'Merla', 'Nedda', 'Paela', 'Portia', 'Seraphina', 'Shaena', 'Trym', 'Vani', 'Verna'];
const halflingSN = ['Brushgather', 'Goodbarrel', 'Greenbottle', 'High-hill', 'Hilltopple', 'Leagallow', 'Tealeaf', 'Thorngage', 'Tosscobble', 'Underbough'];

const halfOrcMFN = ['Dench', 'Feng', 'Gell', 'Henk', 'Holg', 'Imsh', 'Keth', 'Krusk', 'Mhurren', 'Ront', 'Shump', 'Thokk'];
const halfOrcFFN = ['Baggi', 'Emen', 'Engong', 'Kansif', 'Myev', 'Neega', 'Ovak', 'Ownka', 'Shautha', 'Sutha', 'Vola', 'Volen', 'Yevelda'];

const humanMFN = ['Aseir', 'Bardeid', 'Haseid', 'Khemed', 'Mehmen', 'Sudeiman', 'Zasheir', 'Darvin', 'Dorn', 'Evendur', 'Gorstag', 'Grim', 'Helm', 'Malark', 'Morn', 'Randal', 'Stedd', 'Ander', 'Blath', 'Bran', 'Frath', 'Geth', 'Lander', 'Luth', 'Malcer', 'Stor', 'Taman', 'Urth'];
const humanFFN = ['Atala', 'Ceidil', 'hama', 'Jasmal', 'Meilil', 'Seipora', 'Yasheira', 'Zasheida', 'Arveene', 'Esvele', 'Jhessail', 'Kerri', 'Lureene', 'Miri', 'Rowan', 'Shandri', 'Tessele', 'Amafrey', 'Betha', 'Cefrey', 'Kethra', 'Mara', 'Olga', 'Silifrey', 'Westra'];
const humanSN = ['Basha', 'Dumein', 'Jassan', 'Khalid', 'Mostana', 'Pashar', 'Rein', 'Amblecrown', 'Buckman', 'Dundragon', 'Evenwood', 'Greycastle', 'Tallstag', 'Brightwood', 'Helder', 'Hornraven', 'Lackman', 'Stormwind', 'Windrivver'];

const tieflingMFN = ['Akmenos', 'Amnon', 'Barakas', 'Damakos', 'Ekemon', 'Iados', 'Kairon', 'Leucis', 'Melech', 'Mordai', 'Morthos', 'Pelaios', 'Skamos', 'Therai'];
const tieflingFFN = ['Akta', 'Anakis', 'Bryseis', 'Criella', 'Damaia', 'Ea', 'Kallista', 'Lerissa', 'Makaria', 'Nemeia', 'Orianna', 'Phelaia', 'Rieta'];
const tieflingSN = ['Art', 'Carrion', 'Chant', 'Creed', 'Despair', 'Excellence', 'Fear', 'Glory', 'Hope', 'Ideal', 'Music', 'Nowhere', 'Open', 'Poetry', 'Quest', 'Random', 'Reverence', 'Sorrow', 'Temerity', 'Torment', 'Weary'];

let fistname = '';
let surname = '';
let charName = '';
const genName = (charGender, charRace) => {
    if (charGender === 'Male') {
        if (charRace === 'Dragonborn') {
                let i = Math.floor(Math.random() * (dragonMFN.length-1));
                let j = Math.floor(Math.random() * (dragonSN.length-1));
                firstname = dragonMFN[i];
                surname = dragonSN[j];
                charName = firstname + ' ' + surname;
                return charName;
        } else if (charRace === 'Dwarf') {
                let i = Math.floor(Math.random() * (dwarfMFN.length-1));
                let j = Math.floor(Math.random() * (dwarfSN.length-1));
                firstname = dwarfMFN[i];
                surname = dwarfSN[j];
                charName = firstname + ' ' + surname;
                return charName;
        } else if (charRace === 'Half-Elf') {
                let i = Math.floor(Math.random() * (elfMFN.length-1));
                let j = Math.floor(Math.random() * (elfSN.length-1));
                firstname = elfMFN[i];
                surname = elfSN[j];
                charName = firstname + ' ' + surname;
                return charName;
        } else if (charRace === 'High-Elf') {
                let i = Math.floor(Math.random() * (elfMFN.length-1));
                let j = Math.floor(Math.random() * (elfSN.length-1));
                firstname = elfMFN[i];
                surname = elfSN[j];
                charName = firstname + ' ' + surname;
                return charName;
        } else if (charRace === 'Wood-Elf') {
                let i = Math.floor(Math.random() * (elfMFN.length-1));
                let j = Math.floor(Math.random() * (elfSN.length-1));
                firstname = elfMFN[i];
                surname = elfSN[j];
                charName = firstname + ' ' + surname;
                return charName;
        } else if (charRace === 'Drow') {
                let i = Math.floor(Math.random() * (elfMFN.length-1));
                let j = Math.floor(Math.random() * (elfSN.length-1));
                firstname = elfMFN[i];
                surname = elfSN[j];
                charName = firstname + ' ' + surname;
                return charName;
        } else if (charRace === 'Human') {
                let i = Math.floor(Math.random() * (humanMFN.length-1));
                let j = Math.floor(Math.random() * (humanSN.length-1));
                firstname = humanMFN[i];
                surname = humanSN[j];
                charName = firstname + ' ' + surname;
                return charName;
        } else if (charRace === 'Gnome') {
                let i = Math.floor(Math.random() * (gnomeMFN.length-1));
                let j = Math.floor(Math.random() * (gnomeSN.length-1));
                firstname = gnomeMFN[i];
                surname = gnomeSN[j];
                charName = firstname + ' ' + surname;
                return charName;
        } else if (charRace === 'Halfling') {
                let i = Math.floor(Math.random() * (halflingMFN.length-1));
                let j = Math.floor(Math.random() * (halflingSN.length-1));
                firstname = halflingMFN[i];
                surname = halflingSN[j];
                charName = firstname + ' ' + surname;
                return charName;
        } else if (charRace === 'Half-Orc') {
                let i = Math.floor(Math.random() * (halfOrcMFN.length-1));
                firstname = halflingMFN[i];
                charName = firstname;
                return charName;
        } else if (charRace === 'Tiefling') {
            let i = Math.floor(Math.random() * (tieflingMFN.length-1));
            let j = Math.floor(Math.random() * (tieflingSN.length-1));
            firstname = tieflingMFN[i];
            surname = tieflingSN[j];
            charName = firstname + ' ' + surname;
            return charName;
        }
    } else if (charGender === 'Female') {
        if (charRace === 'Dragonborn') {
            let i = Math.floor(Math.random() * (dragonFFN.length-1));
            let j = Math.floor(Math.random() * (dragonSN.length-1));
            firstname = dragonFFN[i];
            surname = dragonSN[j];
            charName = firstname + ' ' + surname;
            return charName;
        } else if (charRace === 'Dwarf') {
            let i = Math.floor(Math.random() * (dwarfFFN.length-1));
            let j = Math.floor(Math.random() * (dwarfSN.length-1));
            firstname = dwarfFFN[i];
            surname = dwarfSN[j];
            charName = firstname + ' ' + surname;
            return charName;
        } else if (charRace === 'Half-Elf') {
            let i = Math.floor(Math.random() * (elfFFN.length-1));
            let j = Math.floor(Math.random() * (elfSN.length-1));
            firstname = elfFFN[i];
            surname = elfSN[j];
            charName = firstname + ' ' + surname;
            return charName;
        } else if (charRace === 'High-Elf') {
            let i = Math.floor(Math.random() * (elfFFN.length-1));
            let j = Math.floor(Math.random() * (elfSN.length-1));
            firstname = elfFFN[i];
            surname = elfSN[j];
            charName = firstname + ' ' + surname;
            return charName;
        } else if (charRace === 'Wood-Elf') {
            let i = Math.floor(Math.random() * (elfFFN.length-1));
            let j = Math.floor(Math.random() * (elfSN.length-1));
            firstname = elfFFN[i];
            surname = elfSN[j];
            charName = firstname + ' ' + surname;
            return charName;
        } else if (charRace === 'Drow') {
            let i = Math.floor(Math.random() * (elfFFN.length-1));
            let j = Math.floor(Math.random() * (elfSN.length-1));
            firstname = elfFFN[i];
            surname = elfSN[j];
            charName = firstname + ' ' + surname;
            return charName;
        } else if (charRace === 'Human') {
            let i = Math.floor(Math.random() * (humanFFN.length-1));
            let j = Math.floor(Math.random() * (humanSN.length-1));
            firstname = humanFFN[i];
            surname = humanSN[j];
            charName = firstname + ' ' + surname;
            return charName;
        } else if (charRace === 'Gnome') {
            let i = Math.floor(Math.random() * (gnomeFFN.length-1));
            let j = Math.floor(Math.random() * (gnomeSN.length-1));
            firstname = gnomeFFN[i];
            surname = gnomeSN[j];
            charName = firstname + ' ' + surname;
            return charName;
        } else if (charRace === 'Halfling') {
            let i = Math.floor(Math.random() * (halflingFFN.length-1));
            let j = Math.floor(Math.random() * (halflingSN.length-1));
            firstname = halflingFFN[i];
            surname = halflingSN[j];
            charName = firstname + ' ' + surname;
            return charName;
        } else if (charRace === 'Half-Orc') {
            let i = Math.floor(Math.random() * (halfOrcFFN.length-1));
            firstname = halfOrcFFN[i];
            charName = firstname;
            return charName;
        }
        else if (charRace === 'Tiefling') {
            let i = Math.floor(Math.random() * (tieflingFFN.length-1));
            let j = Math.floor(Math.random() * (tieflingSN.length-1));
            firstname = tieflingFFN[i];
            surname = tieflingSN[j];
            charName = firstname + ' ' + surname;
            return charName;
        }
    }
}

const genCharacter = () => {
    const gend = genGender();
    const race = genRace();
    
    genName(gend, race);
    console.log(`You are a ${gend} ${race}, named ${charName}`);
}

genCharacter();


//playerName = firstname + ' ' + lastname;

//class

//subclass

//background

//prof

//stats