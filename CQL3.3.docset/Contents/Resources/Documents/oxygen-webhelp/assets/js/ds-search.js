// moving DS JS to its own file for easy change and inclusion in templates
var stSearchKey = '';
var activeDocName = '';
var currentDocNames = new Set();
//currentDocNames.add(activeDocName);
// customRenderFunction
var searchResultsRenderFunction = function(document_type, item) {
    book = ( item['book'] == undefined ) ? '' : ' | ' + item['book'];
    description = ( item['description'] == undefined ) ? '' : item['description'];
    displayFlag = ( item['doc-name'] === activeDocName );
    out = '<div class="st-result">'
        + '<h3 class="title">'
        + '<a href="' 
        + item['url']
        + '" class="st-result">'
        + item['title'] + '</a> ' + book + '</h3><p class="st-description">'
        + description + '</p></div>';
    return out;
};
// modal overlay
var toggleOverlay = function() {
    var containerElement = document.getElementById("st-modal");
    if ( containerElement.style.display === 'none' ) {
        containerElement.style.display = 'block';
    }
    //window.location.reload(true); 
};
var inputHandlerFunction = function(event) {
    console.log("inputHandlerFunction called");
    toggleOverlay();
    return true;
};
var getDocnameToFilterBy = function() {
    return "{'page': {'doc-name': " + activeDocName + "}}";
};
var reloadResults = function() {
    $(window).hashchange();
};
var changeFilters = function(event) {
    console.log("changeFilters called");
    var radioElements = Array.prototype.slice.call( document.getElementsByClassName('docNames') );
    for (var lmn of radioElements) {
        if ( lmn.checked ) {
            activeDocName = lmn.value;
            break;
        }
    }
    if ( ! currentDocNames.has(activeDocName) ) {
        currentDocNames.add(activeDocName);
        var resultsContainer = document.getElementById("st-results-container");
        var element = document.createElement("div");
        element.setAttribute("id", "st-results-container-" + activeDocName);
        resultsContainer.insertBefore(element, document.getElementById("st-results-container").childNodes[0]);
        initializeSearch(stSearchKey, activeDocName);
    }
    for (var dname of currentDocNames) {
        var container = document.getElementById("st-results-container-" + dname);
        if (dname === activeDocName) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    }
    return true;
};
var initializeSearch = function(key, docName) {
    console.log("initializeSearch called");
    // set up search
    activeDocName = docName;
    currentDocNames.add(docName);
    stSearchKey = key;
    $("#st-search-input").swiftypeSearch({
        renderFunction: searchResultsRenderFunction,
        fetchFields: {'page': ['book','title','description','url','doc-name']},
        filters: {'page': {'doc-name': docName}},
        searchFields: {'page': ['book','title','body']},
        resultContainingElement: "#st-results-container-" + docName,
        engineKey: key
    });
};

$("#stSearchForm").submit(inputHandlerFunction);


