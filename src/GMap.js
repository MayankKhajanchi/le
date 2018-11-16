import React, {Component} from 'react';
import './GMap.css';


class GMap extends Component {
  
  componentDidMount(){
    this.renderMap()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDCVPr02Mp6OtEUNEilXUs_SQslYozWohc&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
    var iconBase = 'http://maps.google.com/mapfiles/kml/shapes/';
    var icons = {
      sapling: {
        icon: iconBase + 'parks.png',
      },
    };
    var features = [
      {
        position: new window.google.maps.LatLng(parseFloat(this.props.latitude), parseFloat(this.props.longitude)),
        type: 'sapling',
        id: this.props.data.data[0].id
      },
      {
        position: new window.google.maps.LatLng(parseFloat(this.props.latitude2), parseFloat(this.props.longitude2)),
        type: 'sapling',
        id: this.props.data.data[0].id
      },
    ];
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      //center set to Kadugodi Nursery
      center: new window.google.maps.LatLng(parseFloat(this.props.latitude), parseFloat(this.props.longitude)),
      mapTypeId: 'roadmap',
      backgroundColor:"#eeeeee",
    });
    features.forEach(function(feature) {
      var marker = new window.google.maps.Marker({
        position: feature.position,
        icon: icons[feature.type].icon,
        map: map,
      });
    }
  );
}


  render(){
      return(
        <main>
        <div id="map"></div>
        </main>

      );
  }
}

function loadScript(url){
  var index = window.document.getElementsByTagName("script")[0] //selected the first script tag // index is the reference node
  var script = window.document.createElement("script")          //created our script tag        // script is the new node
  script.src = url //src is set
  script.async = true 
  script.defer = true
  index.parentNode.insertBefore(script, index) //appending child  script using insertBefore before the firast script tag
  
}

export default GMap;