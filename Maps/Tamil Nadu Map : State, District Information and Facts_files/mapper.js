var smaprtMapperURL="{DYNAMIC_PROTOCOL}://spl.zeotap.com/";
var xmlhttp;
var isInValidContentType = function(contentTypes){
    if(contentTypes) {
        switch (contentTypes) {
            case 'image/png':
                return true;
        }
    }
    return false;
}
if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
    xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
if ((document.getElementById("zeo_mapping").src!=undefined) && (document.getElementById("zeo_mapping").src.split('?').length>1))
{
    if (window.location.protocol == "http:")
    {
        getprotocol="http"
    }
    else
    {
        getprotocol="https"
    }
    smaprtMapperURL+="?"+document.getElementById("zeo_mapping").src.split('?')[1];
    smaprtMapperURL=smaprtMapperURL.replace('{DYNAMIC_PROTOCOL}',getprotocol);
}
xmlhttp.open("GET", smaprtMapperURL, true);
xmlhttp.onreadystatechange=function()
{
    var inValidContentType = isInValidContentType(xmlhttp.getResponseHeader("Content-Type"));
    if (xmlhttp.readyState==4 && xmlhttp.status==200 )
    {
        var node = document.createElement("div");
        if(inValidContentType){
            node.style.display = 'none'
        }
        var ad_text = xmlhttp.responseText;
        var ad_banner = document.getElementById("zeo_mapping").getAttribute('data-ad-banner');
        if (ad_banner != null)
        {
            ad_text += ad_banner;
        }
        node.innerHTML = ad_text;
        document.body.appendChild(node);
    }
}
xmlhttp.send();
