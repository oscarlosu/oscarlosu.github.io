var pages = ["page1.html", "page2.html"];
var currentPage = 0;

function Load(where, what) {
    $(where).load(what);
}

function LoadPreviousPage(where) {
    currentPage = (currentPage - 1);
    currentPage = currentPage < 0 ? pages.length - 1 : currentPage % pages.length;
    Load(where, pages[currentPage]);
}

function LoadNextPage(where) {
    currentPage = (currentPage + 1) % pages.length;
    Load(where, pages[currentPage]);
}