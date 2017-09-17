function getVersionDropdown(productName, docName) {
	var data = '{' +
					'"datastax_enterprise" : {' +
						'"label01" : ["Latest DataStax Enterprise docs"],' +
						'"dseadmin51" : ["DSE Admin 5.1", "/en/dse/5.1/dse-admin/"],' +
						'"dsearch51" : ["DSE Arch 5.1", "/en/dse/5.1/dse-arch/"],' +
						'"dsedev51" : ["DSE Dev 5.1", "/en/dse/5.1/dse-dev/"],' +
						'"label02" : ["Earlier DataStax Enterprise docs"],' +
						'"dse50" : ["DataStax Enterprise 5.0", "/en/datastax_enterprise/5.0/"],' +
						'"dse48" : ["DataStax Enterprise 4.8", "/en/datastax_enterprise/4.8/"],' +
						'"dse47" : ["DataStax Enterprise 4.7 (EOL)", "/en/datastax_enterprise/4.7/"],' +
						'"label03" : ["CQL docs"],' +
						'"cql51" : ["CQL 5.1 (used by DSE 5.1)", "/en/dse/5.1/cql/"],' +
						'"cql33" : ["CQL 3.3 (used by DSE 5.0; C* 3.0, 3.x)", "/en/cql/3.3/"],' +
						'"cql31" : ["CQL 3.1 (used by DSE 4.7, 4.8 C* 2.1)", "/en/cql/3.1/"],' +
						'"label04" : ["Other docs"],' +
						'"dseplanning" : ["DSE Planning", "/en/dse-planning/doc/"],' +
						'"dsetrblshoot" : ["DSE Troubleshooting", "/en/dse-trblshoot/doc/"],' +
						'"all" : ["All docs", "/en/landing_page/doc/landing_page/docList.html"]' +
					'},' +
					'"dse-admin" : {' +
						'"label01" : ["Latest DataStax Enterprise docs"],' +
						'"dseadmin51" : ["DSE Admin 5.1", "/en/dse/5.1/dse-admin/"],' +
						'"dsearch51" : ["DSE Arch 5.1", "/en/dse/5.1/dse-arch/"],' +
						'"dsedev51" : ["DSE Dev 5.1", "/en/dse/5.1/dse-dev/"],' +
						'"label02" : ["Earlier DataStax Enterprise docs"],' +
						'"dse50" : ["DSE 5.0", "/en/datastax_enterprise/5.0/"],' +
						'"dse48" : ["DataStax Enterprise 4.8", "/en/datastax_enterprise/4.8/"],' +
						'"dse47" : ["DataStax Enterprise 4.7 (EOL)", "/en/datastax_enterprise/4.7/"],' +
						'"label03" : ["CQL docs"],' +
						'"cql51" : ["CQL 5.1 (used by DSE 5.1)", "/en/dse/5.1/cql/"],' +
						'"cql33" : ["CQL 3.3 (used by DSE 5.0; C* 3.0, 3.x)", "/en/cql/3.3/"],' +
						'"cql31" : ["CQL 3.1 (used by DSE 4.7, 4.8 C* 2.1)", "/en/cql/3.1/"],' +
						'"label04" : ["Other docs"],' +
						'"dseplanning" : ["DSE Planning", "/en/dse-planning/doc/"],' +
						'"dsetrblshoot" : ["DSE Troubleshooting", "/en/dse-trblshoot/doc/"],' +
						'"all" : ["All docs", "/en/landing_page/doc/landing_page/docList.html"]' +
					'},' +
					'"dse-arch" : {' +
						'"label01" : ["Latest DataStax Enterprise docs"],' +
						'"dseadmin51" : ["DSE Admin 5.1", "/en/dse/5.1/dse-admin/"],' +
						'"dsearch51" : ["DSE Arch 5.1", "/en/dse/5.1/dse-arch/"],' +
						'"dsedev51" : ["DSE Dev 5.1", "/en/dse/5.1/dse-dev/"],' +
						'"label02" : ["Earlier DataStax Enterprise docs"],' +
						'"dse50" : ["DSE 5.0", "/en/datastax_enterprise/5.0/"],' +
						'"dse48" : ["DataStax Enterprise 4.8", "/en/datastax_enterprise/4.8/"],' +
						'"dse47" : ["DataStax Enterprise 4.7 (EOL)", "/en/datastax_enterprise/4.7/"],' +
						'"label03" : ["CQL docs"],' +
						'"cql51" : ["CQL 5.1 (used by DSE 5.1)", "/en/dse/5.1/cql/"],' +
						'"cql33" : ["CQL 3.3 (used by DSE 5.0; C* 3.0, 3.x)", "/en/cql/3.3/"],' +
						'"cql31" : ["CQL 3.1 (used by DSE 4.7, 4.8 C* 2.1)", "/en/cql/3.1/"],' +
						'"label04" : ["Other docs"],' +
						'"dseplanning" : ["DSE Planning", "/en/dse-planning/doc/"],' +
						'"dsetrblshoot" : ["DSE Troubleshooting", "/en/dse-trblshoot/doc/"],' +
						'"all" : ["All docs", "/en/landing_page/doc/landing_page/docList.html"]' +
					'},' +
					'"dse-dev" : {' +
						'"label01" : ["Latest DataStax Enterprise docs"],' +
						'"dseadmin51" : ["DSE Admin 5.1", "/en/dse/5.1/dse-admin/"],' +
						'"dsearch51" : ["DSE Arch 5.1", "/en/dse/5.1/dse-arch/"],' +
						'"dsedev51" : ["DSE Dev 5.1", "/en/dse/5.1/dse-dev/"],' +
						'"label02" : ["Earlier DataStax Enterprise docs"],' +
						'"dse50" : ["DSE 5.0", "/en/datastax_enterprise/5.0/"],' +
						'"dse48" : ["DataStax Enterprise 4.8", "/en/datastax_enterprise/4.8/"],' +
						'"dse47" : ["DataStax Enterprise 4.7 (EOL)", "/en/datastax_enterprise/4.7/"],' +
						'"label03" : ["CQL docs"],' +
						'"cql51" : ["CQL 5.1 (used by DSE 5.1)", "/en/dse/5.1/cql/"],' +
						'"cql33" : ["CQL 3.3 (used by DSE 5.0; C* 3.0, 3.x)", "/en/cql/3.3/"],' +
						'"cql31" : ["CQL 3.1 (used by DSE 4.7, 4.8 C* 2.1)", "/en/cql/3.1/"],' +
						'"label04" : ["Other docs"],' +
						'"dseplanning" : ["DSE Planning", "/en/dse-planning/doc/"],' +
						'"dsetrblshoot" : ["DSE Troubleshooting", "/en/dse-trblshoot/doc/"],' +
						'"all" : ["All docs", "/en/landing_page/doc/landing_page/docList.html"]' +
					'},' +
					'"dse-planning" : {' +
						'"label01" : ["Latest DataStax Enterprise docs"],' +
						'"dseadmin51" : ["DSE Admin 5.1", "/en/dse/5.1/dse-admin/"],' +
						'"dsearch51" : ["DSE Arch 5.1", "/en/dse/5.1/dse-arch/"],' +
						'"dsedev51" : ["DSE Dev 5.1", "/en/dse/5.1/dse-dev/"],' +
						'"label02" : ["Earlier DataStax Enterprise docs"],' +
						'"dse50" : ["DSE 5.0", "/en/datastax_enterprise/5.0/"],' +
						'"dse48" : ["DataStax Enterprise 4.8", "/en/datastax_enterprise/4.8/"],' +
						'"dse47" : ["DataStax Enterprise 4.7 (EOL)", "/en/datastax_enterprise/4.7/"],' +
						'"label03" : ["Other docs"],' +
						'"dseplanning" : ["DSE Planning", "/en/dse-planning/doc/"],' +
						'"dsetrblshoot" : ["DSE Troubleshooting", "/en/dse-trblshoot/doc/"],' +
						'"all" : ["All docs", "/en/landing_page/doc/landing_page/docList.html"]' +
					'},' +
					'"dse-trblshoot" : {' +
						'"label01" : ["Latest DataStax Enterprise docs"],' +
						'"dseadmin51" : ["DSE Admin 5.1", "/en/dse/5.1/dse-admin/"],' +
						'"dsearch51" : ["DSE Arch 5.1", "/en/dse/5.1/dse-arch/"],' +
						'"dsedev51" : ["DSE Dev 5.1", "/en/dse/5.1/dse-dev/"],' +
						'"label02" : ["Earlier DataStax Enterprise docs"],' +
						'"dse50" : ["DSE 5.0", "/en/datastax_enterprise/5.0/"],' +
						'"dse48" : ["DataStax Enterprise 4.8", "/en/datastax_enterprise/4.8/"],' +
						'"dse47" : ["DataStax Enterprise 4.7 (EOL)", "/en/datastax_enterprise/4.7/"],' +
						'"label03" : ["Other docs"],' +
						'"dseplanning" : ["DSE Planning", "/en/dse-planning/doc/"],' +
						'"dsetrblshoot" : ["DSE Troubleshooting", "/en/dse-trblshoot/doc/"],' +
						'"all" : ["All docs", "/en/landing_page/doc/landing_page/docList.html"]' +
					'},' +
					'"cassandra" : {' +
						'"label01" : ["Cassandra docs"],' +
						'"cassandra30" : ["Cassandra 3.0 Linux (used by DSE 5.0)", "/en/cassandra/3.0/"],' +
						'"cassandra21" : ["Cassandra 2.1 (used by DSE 4.7, 4.8)", "/en/cassandra/2.1/"],' +
						'"label02" : ["CQL docs"],' +
						'"cql33" : ["CQL 3.3 (used by DSE 5.0; C* 3.0, 3.x)", "/en/cql/3.3/"],' +
						'"cql31" : ["CQL 3.1 (used by DSE 4.7, 4.8 C* 2.1)", "/en/cql/3.1/"],' +
						'"label03" : ["Earlier DataStax Enterprise docs"],' +
						'"dse50" : ["DSE 5.0", "/en/datastax_enterprise/5.0/"],' +
						'"dse48" : ["DataStax Enterprise 4.8", "/en/datastax_enterprise/4.8/"],' +
						'"dse47" : ["DataStax Enterprise 4.7 (EOL)", "/en/datastax_enterprise/4.7/"],' +
						'"label04" : ["Other docs"],' +
						'"all" : ["All docs", "/en/landing_page/doc/landing_page/docList.html"]' +
					'},' +
					'"opscenter" : {' +
						'"opsc61" : ["OpsCenter 6.1 (latest)", "/en/opscenter/6.1/"],' +
						'"opsc60" : ["OpsCenter 6.0", "/en/opscenter/6.0/"],' +
						'"all" : ["All docs", "/en/landing_page/doc/landing_page/docList.html"]' +
					'},' +
					'"cql" : {' +
					    '"label01" : ["CQL docs"],' +
						'"cql51" : ["CQL 5.1 (used by DSE 5.1)", "/en/dse/5.1/cql/"],' +
						'"cql33" : ["CQL 3.3 (used by DSE 5.0; C* 3.0, 3.x)", "/en/cql/3.3/"],' +
						'"cql31" : ["CQL 3.1 (used by DSE 4.7, 4.8 C* 2.1)", "/en/cql/3.1/"],' +
						'"label02" : ["Latest DataStax Enterprise docs"],' +
						'"dseadmin51" : ["DSE Admin 5.1", "/en/dse/5.1/dse-admin/"],' +
						'"dsearch51" : ["DSE Arch 5.1", "/en/dse/5.1/dse-arch/"],' +
						'"dsedev51" : ["DSE Dev 5.1", "/en/dse/5.1/dse-dev/"],' +
						'"label03" : ["Earlier DataStax Enterprise docs"],' +
						'"dse50" : ["DSE 5.0", "/en/datastax_enterprise/5.0/"],' +
						'"dse48" : ["DataStax Enterprise 4.8", "/en/datastax_enterprise/4.8/"],' +
						'"dse47" : ["DataStax Enterprise 4.7 (EOL)", "/en/datastax_enterprise/4.7/"],' +
						'"label04" : ["Cassandra docs"],' +
						'"cassandra30" : ["Cassandra 3.0 Linux (used by DSE 5.0)", "/en/cassandra/3.0/"],' +
						'"cassandra21" : ["Cassandra 2.1 (used by DSE 4.7, 4.8)", "/en/cassandra/2.1/"],' +
						'"label05" : ["Other docs"],' +
						'"all" : ["All docs", "/en/landing_page/doc/landing_page/docList.html"]' +
					'},' +
					'"odbc-driver" : {' +
						'"odbcdriver" : ["ODBC driver", "/en/developer/odbc-driver/doc/"],' +
						'"all" : ["All docs", "/en/landing_page/doc/landing_page/docList.html"]' +
					'},' +
					'"devcenter" : {' +
						'"devcenter" : ["DevCenter", "datastax_enterprise/devcenter/dcToc.html"],' +
						'"all" : ["All docs", "/en/landing_page/doc/landing_page/docList.html"]' +
					'},' +
					'"upgrade" : {' +
						'"upgrade" : ["Upgrade", "/en/upgrade/doc/"],' +
						'"all" : ["All docs", "/en/landing_page/doc/landing_page/docList.html"]' +
					'},' +
					'"playlist" : {' +
						'"playlist" : ["Playlist (Java) for DSE 4.8", "/en/playlist/doc/"],' +
						'"all" : ["All docs", "/en/landing_page/doc/landing_page/docList.html"]' +
					'},' +
					'"tutorials" : {' +
						'"kerberos" : ["Kerberos", "/en/tutorials/kerberos/doc/"],' +
						'"all" : ["All docs", "/en/landing_page/doc/landing_page/docList.html"]' +
					'},' +
					'"driver-matrix" : {' +
						'"drivermatrix" : ["Driver compatability", "/en/developer/driver-matrix/doc/"],' +
						'"all" : ["All docs", "/en/landing_page/doc/landing_page/docList.html"]' +
					'},' +
					'"studio" : {' +
						'"studio20" : ["DSE Studio 2.0 (latest)", "/en/dse/5.1/dse-dev/datastax_enterprise/studio/stdToc.html"],' +
						'"studio10" : ["DSE Studio 1.0", "/en/studio/1.0/"],' +
						'"label01" : ["Other docs"],' +
						'"cql51" : ["CQL 5.1 (used by DSE 5.1)", "/en/dse/5.1/cql/"],' +
						'"cql33" : ["CQL 3.3 (used by DSE 5.0; C* 3.0, 3.x)", "/en/cql/3.3/"],' +
						'"all" : ["All docs", "/en/landing_page/doc/landing_page/docList.html"]' +
					'},' +
					'"glossary" : {' +
						'"glossary" : ["Glossary", "/en/glossary/doc/glossary/glossaryTOC.html"],' +
						'"all" : ["All docs", "/en/landing_page/doc/landing_page/docList.html"]' +
					'},' +
					'"datastax_enterprise-jajp" : {' +
						'"jajpdse50" : ["DataStax Enterprise 5.0", "/ja/datastax_enterprise-jajp/5.0/"],' +
						'"jajpcassandra30" : ["Cassandra 3.0 Linux (DSE 5.0で使用)", "/ja/cassandra-jajp/3.0/"],' +
						'"jajpcql33" : ["CQL 3.3 (DSE 5.0で使用)", "/ja/cql-jajp/3.3/"],' +
						'"jajpcql31" : ["CQL 3.1", "/ja/cql-jajp/3.1/"],' +
						'"all" : ["ドキュメント一覧", "/ja/landing_page-jajp/doc/landing_page/docList.html"]' +
					'},' +
					'"cassandra-jajp" : {' +
						'"jajpdse50" : ["DataStax Enterprise 5.0", "/ja/datastax_enterprise-jajp/5.0/"],' +
						'"jajpcassandra30" : ["Cassandra 3.0 Linux (DSE 5.0で使用)", "/ja/cassandra-jajp/3.0/"],' +
						'"jajpcql33" : ["CQL 3.3 (DSE 5.0で使用)", "/ja/cql-jajp/3.3/"],' +
						'"all" : ["ドキュメント一覧", "/ja/landing_page-jajp/doc/landing_page/docList.html"]' +
					'},' +
					'"cassandra_win-jajp" : {' +
						'"cassandrawin30" : ["Cassandra 3.0 Windows", "/ja/cassandra_win-jajp/3.0/"],' +
						'"all" : ["ドキュメント一覧", "/ja/landing_page-jajp/doc/landing_page/docList.html"]' +
					'},' +
					'"cql-jajp" : {' +
						'"jajpdse50" : ["DataStax Enterprise 5.0", "/ja/datastax_enterprise-jajp/5.0/"],' +
						'"jajpcassandra30" : ["Cassandra 3.0 Linux (DSE 5.0で使用)", "/ja/cassandra-jajp/3.0/"],' +
						'"jajpcql33" : ["CQL 3.3 (DSE 5.0で使用)", "/ja/cql-jajp/3.3/"],' +
						'"jajpcql31" : ["CQL 3.1", "/ja/cql-jajp/3.1/"],' +
						'"all" : ["ドキュメント一覧", "/ja/landing_page-jajp/doc/landing_page/docList.html"]' +
					'},' +
					'"upgrade-jajp" : {' +
						'"jajpupgrade" : ["Upgrade", "/ja/upgrade-jajp/doc/"],' +
						'"all" : ["ドキュメント一覧", "/ja/landing_page-jajp/doc/landing_page/docList.html"]' +
					'},' +
					'"glossary-jajp" : {' +
						'"jajpglossary" : ["Glossary", "/ja/glossary-jajp/doc/glossary/glossaryTOC.html"],' +
						'"all" : ["ドキュメント一覧", "/ja/landing_page-jajp/doc/landing_page/docList.html"]' +
					'}' +
				'}';
	var parsed = JSON.parse(data);
    var spanElement = document.getElementById('version-dropdown');
	if ( docName == "landingpage" || docName == "jajplandingpage") {
		spanElement.style.display = "none";
		return;
	} else {
		spanElement.style.display = "inline";
	}
	var archivedProducts = [ "dse32", "dse40", "dse45", "dse46", "cassandra12",
                             "cassandra20", "cassandra22", "cassandrawin22", "cassandra3x", 
                             "cassandrawin30", "cassandrawin3x", 
                             "opsc52", "opsc51", "opsc50", "opsc40", "opsc41", "cql30" ];
	if ( archivedProducts.includes(docName) ) {
		var formElement = document.getElementById('version-dropdown-form');
		formElement.style.display = "none";
	    return;
	}
	var selectElement = document.createElement("select");
	selectElement.setAttribute("onchange", "contextAwareVersionSwitcher(this.options[this.selectedIndex].value);");
	var itemElement = null;
	var ogFlag = false;
	var optgroupElement = null;
	if ( parsed[productName][docName] ) {
        for ( option in parsed[productName] ) {
            if ( option.substring(0, 5) === 'label' ) {
                optgroupElement = document.createElement("optgroup");
                optgroupElement.setAttribute("label", parsed[productName][option]);
                optgroupElement.setAttribute("style", "color:#374C51; background-color:white; padding-left:3px");
                selectElement.appendChild(optgroupElement);
                ogFlag = true;
            }
            var optionElement = document.createElement("option");
            if ( option == docName ) {
                optionElement.setAttribute("selected", "true");
                optionElement.setAttribute("class", "color:white");
            }
            var contentNode = document.createTextNode(parsed[productName][option][0]);
            optionElement.appendChild(contentNode);
            optionElement.setAttribute("value", parsed[productName][option][1]);
            if ( option.substring(0, 5) === 'label' ) {
                // do nothing
            } else if ( ogFlag ) {
                optgroupElement.appendChild(optionElement);
            } else {
                selectElement.appendChild(optionElement);
            }
        }
	} else {
        var emptyOptionElement = document.createElement("option");
        var emptyContentNode = document.createTextNode("TBD");
        emptyOptionElement.appendChild(emptyContentNode);
        emptyOptionElement.setAttribute("value", "/en/landing_page/doc/landing_page/docList.html");
        selectElement.appendChild(emptyOptionElement);
	}
	var formElement = document.getElementById('version-dropdown-form');
	var oldSelectElement = formElement.firstElementChild;
	formElement.replaceChild(selectElement, oldSelectElement);
};

function contextAwareVersionSwitcher(selectedUrl) {
	// selecting a link to the landing page should immediately redirect
	if (selectedUrl.indexOf("landing_page") > -1) {
		window.location = selectedUrl;
	}
	// otherwise, do some URL parsing magic to figure out if the same topic exists in the target doc
	var pathArray = window.location.pathname.split( '/' );
	var currentUrl;
	// handle latest-* urls in dropdown
	if (pathArray[2].indexOf("latest") > -1) {
		currentUrl = "/" + pathArray[1] + "/" + pathArray[2] + "/";
	} else if (pathArray[4].indexOf("dse-") > -1) {
		currentUrl = "/" + pathArray[1] + "/" + pathArray[2] + "/" + pathArray[3] + "/" + pathArray[4] + "/";
	} else {
		currentUrl =  "/" + pathArray[1] + "/" + pathArray[2] + "/" + pathArray[3] + "/";
	}
	// get the topic location by removing the current doc base url from window.location.href
	rawUrl = window.location.href;
	path = window.location.pathname;
	host = rawUrl.replace(path, "");
	rawUrl = rawUrl.replace(host, "");
	// now strip the currently selected doc base url
	parsedUrl = rawUrl.replace(currentUrl, selectedUrl);
	// See if the topic exists in the selected doc; if so, go to topic, if not go to base url
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		// if the topic exists, we'll get a 200 response
		if (this.readyState == 4) {
			if (this.status == 200) {
				window.location = parsedUrl;
			} else {
				window.location = selectedUrl;
			}
		}
	}
	xhr.onerror = function() {
		console.log("Current topic not in selected doc, redirect to doc home " + selectedUrl);
		window.location = selectedUrl;
	}
	xhr.open('GET', parsedUrl, true);
	xhr.send();
}
