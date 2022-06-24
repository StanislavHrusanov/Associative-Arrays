function bookShelf(arr) {
    let shelves = {};

    for (let line of arr) {

        if (line.includes('>')) {
            let [id, genre] = line.split(' -> ');

            if (!shelves.hasOwnProperty(id)) {
                shelves[id] = { genre };
            }
        } else if (line.includes(':')) {
            let [bookTitle, bookAuthorAndGenre] = line.split(': ');
            let [bookAuthor, bookGenre] = bookAuthorAndGenre.split(', ');

            for (let shelf in shelves) {

                if (shelves[shelf].genre == bookGenre) {

                    if (!shelves[shelf].hasOwnProperty('books')) {
                        shelves[shelf].books = [];
                    }
                    shelves[shelf].books.push({
                        bookTitle,
                        bookAuthor
                    });
                }
            }
        }
    }
    let sortedShelvesByCountOfBooks = Object.keys(shelves)
        .sort((a, b) => shelves[b].books.length - shelves[a].books.length)
        .map(shelf => {
            console.log(`${shelf} ${shelves[shelf].genre}: ${shelves[shelf].books.length}`);
            let sortedBooksByTitle = shelves[shelf].books
                .sort((a, b) => a.bookTitle.localeCompare(b.bookTitle))
                .map(book => console.log(`--> ${book.bookTitle}: ${book.bookAuthor}`));
        });

}
bookShelf(['1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi']
);