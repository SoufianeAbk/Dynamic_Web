// Data simulatie - gebruikers database
const users = [
    { id: 1, name: "Sara", email: "sara@example.com", isAdmin: false },
    { id: 2, name: "Alex", email: "alex@example.com", isAdmin: true },
    { id: 3, name: "Kim", email: "kim@example.com", isAdmin: false }
];

// Functie om een gebruiker op te halen
const getUser = (userId) => {
    const user = users.find(u => u.id === userId);
    if (!user) {
        throw new Error(`Gebruiker met ID ${userId} niet gevonden.`);
    }
    return user.name;
};

// Functie om admin-rechten te controleren
const checkAdminRights = (userId) => {
    const user = users.find(u => u.id === userId);
    if (!user) {
        throw new Error(`Gebruiker met ID ${userId} niet gevonden.`);
    }
    return user.isAdmin;
};

// Functie om e-mail te formatteren
const formatEmail = (email) => {
    const match = email.match(/^(.+)@/);
    if (!match) {
        throw new Error(`Ongeldig e-mailadres: ${email}`);
    }
    return match[1].toUpperCase() + "@" + email.split('@')[1];
};

// Functie om gebruikers te verwerken
const processUsers = () => {
    for (let i = 0; i < users.length; i++) { // Loop fix
        try {
            const user = getUser(users[i].id);
            const isAdmin = checkAdminRights(users[i].id);
            const formattedEmail = formatEmail(users[i].email);
            console.log(`Verwerkt: ${user} (Admin: ${isAdmin}) - ${formattedEmail}`);
        } catch (error) {
            console.error(`Fout bij verwerking gebruiker ${users[i]?.id || 'onbekend'}: ${error.message}`);
        }
    }
};

processUsers();
