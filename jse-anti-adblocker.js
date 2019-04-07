function JSEcheckAdblocker(JSEuserID,JSEsiteID,JSEsubID) {
  var adTest = window.document.createElement('div');
  adTest.setAttribute('class', '300x250 728x90 text-ad-links pub_300x250 text-ad textAd text_ad pub_300x250m pub_728x90 text_ads text-ads');
  adTest.setAttribute('style', 'width: 300px !important; height: 250px !important; position: absolute !important; left: -999px !important; top: -999px !important;');
  this.adTest = window.document.body.appendChild(adTest);
  this.adTest.offsetParent;
  this.adTest.clientWidth;
  setTimeout(function() {
    var detected = false;
    if (this.adTest.offsetParent === null ||this.adTest.clientWidth == 0) {
      detected = true;
    }
    if(window.getComputedStyle !== undefined) {
      var adTestTemp = window.getComputedStyle(this.adTest, null);
      if(adTestTemp && (adTestTemp.getPropertyValue('display') == 'none' || adTestTemp.getPropertyValue('visibility') == 'hidden')) {
        detected = true;
      }
    }
    if (detected) {
      console.log('JSE: Ad Blocker Detected');
      var adblockChoice = window.document.createElement('div');
      adblockChoice.setAttribute('id', 'JSE-adblock-choice');
      var leftOffset = (window.innerWidth / 2) - 150;
      adblockChoice.setAttribute('style', 'background: #FFF; position: fixed; left: '+leftOffset+'px; top: 20%; padding: 20px; border: 1px solid #CCC; max-width: 300px; font-size: 17px; text-align: center;');
      adblockChoice.innerHTML = '<strong>Please help support our content</strong><br><br>Would you prefer to disable your ad blocker or continue ad-free with JSEcoin cryptocurrency mining.<br><br><button id="JSE-disable-adblocker-button">Disable Ad-Blocker</button><br><br><button id="JSE-load-mining-button">Ad-Free With JSEcoin</button>';
      window.document.body.appendChild(adblockChoice);
      window.document.getElementById('JSE-disable-adblocker-button').setAttribute('style','background-color: #4285f4; border: none; color: white; padding: 15px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; width: 280px; cursor: pointer; border-radius: 3px;');
      window.document.getElementById('JSE-load-mining-button').setAttribute('style','background-color: #4285f4; border: none; color: white; padding: 15px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; width: 280px; cursor: pointer; border-radius: 3px;');
      window.document.getElementById('JSE-disable-adblocker-button').onclick = function() { 
        var instructions = 'To disable your ad blocker either click the icon and click "Enabled on this site" or go to your web browser options > add ons > uninstall the program.';
        adblockChoice.innerHTML = 'Disable or remove your ad blocker then refresh the page<br><br>'+instructions+'<br><br><button id="JSE-refresh-button">I Have Disabled AdBlocker</button>';
        window.document.getElementById('JSE-refresh-button').setAttribute('style','background-color: #4285f4; border: none; color: white; padding: 15px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; width: 280px; cursor: pointer; border-radius: 3px;');
        window.document.getElementById('JSE-refresh-button').onclick = function() {
          location.reload();
        };
      };
      window.document.getElementById('JSE-load-mining-button').onclick = function() {
        window.document.body.removeChild(adblockChoice);
        var e=document,t=e.createElement("script"),s=e.getElementsByTagName("script")[0];t.type="text/javascript",t.async=t.defer=!0,t.src="https://load.jsecoin.com/load/"+JSEuserID+"/"+JSEsiteID+"/"+JSEsubID+"/0/",s.parentNode.insertBefore(t,s);
      };
    } else {
      console.log('JSE: No Ad Blocker Detected');
    }
    window.document.body.removeChild(this.adTest);
  },100);
};