function bookShelf(arr) {

    let shelves = {};

    while (arr.length > 0) {

        let line = arr.shift();

        if (line.includes('>')) {

            line = line.split(' -> ');
            let shelfId = line[0];
            let shelfGenre = line[1];

            if (!shelves.hasOwnProperty(shelfId)) {
                shelves[shelfId] = {};

                if (!shelves[shelfId].hasOwnProperty(shelfGenre)) {
                    shelves[shelfId][shelfGenre] = [];
                }
            }

        } else if (line.includes(':')) {
            line = line.split(', ');
            let titleAndAuthor = line[0];
            let bookGenre = line[1];

            for (let shelf in shelves) {

                if (Object.keys(shelves[shelf]).includes(bookGenre)) {
                    shelves[shelf][bookGenre].push(titleAndAuthor);
                }
            }
        }
    }

    let sortedShelvesByCountOfBooks = Object.keys(shelves)
        .sort((a, b) => getCountOfBook(shelves[b]) - getCountOfBook(shelves[a]));

    sortedShelvesByCountOfBooks.map(shelf => {
        let genreAndBooks = Object.entries(shelves[shelf]);
        let genre = genreAndBooks[0][0];
        let books = genreAndBooks[0][1];
        let sortedBooks = books.sort((a, b) => a.localeCompare(b));
        console.log(`${shelf} ${genre}: ${sortedBooks.length}`);
        sortedBooks.map(book => console.log(`--> ${book}`));
    });

    function getCountOfBook(shelf) {
        return Object.entries(shelf)[0][1].length;
    }
}
bookShelf(['1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'aaaaa: bbbbb, sci-fi',
    'aggggg: jjjjjjj, mystery']
);