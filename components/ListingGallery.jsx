import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

const ListingGallery = () => {
  const imageUrl = [
    "https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=iZ561ZIXOtPYGSzqlKUnLrliorreOYVz1pzu8WJmrnc=",
    "https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    "https://www.thespruce.com/thmb/P4hBQtEPZVrrWPdbtXy7-wv9fiE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1161177015-f1de4ba58a6c4f50969d9119d80405a6.jpg",
    "https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/jfm-1736069001-9OxTK/living-room-1736166426-6jNnL/lr-5-1738479220-1p2Mn.jpg",
    "https://www.rennovate.co.in/wp-content/uploads/2022/09/blog10-1.jpg",
    "https://www.decorpot.com/images/blogimage1361284108interior-designs-for-master-bedroom.jpg",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    "https://media.designcafe.com/wp-content/uploads/2022/07/29185246/tv-unit-design-in-the-living-room-features-floating-cabinet.jpg",
    "https://images.homify.com/v1581784267/p/photo/image/3349737/Masterbedroom.jpg",
    "https://www.360interiordesigning.com/assets/interiordesigerfeaturedimage/FEATUREDIMG37071687775818.jpg",
    "https://www.shilpakalainteriors.in/images/gallery/Home/Living/gallery-thumb-new-1.jpg",
    "https://dlifeinteriors.com/wp-content/uploads/2020/02/Interior-designers-in-HSR-Layout-1024x683.jpg",
    "https://www.360interiordesigning.com/assets/interiordesigerfeaturedimage/FEATUREDIMG50061695621545.jpg",
    "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/monochrome-living-room-featuring-marble-wall-and-sofa/modern-living-room-with-marble-wall.jpg.transform/bh-gallery-listing/image.webp",
    "https://www.decorilla.com/online-decorating/wp-content/uploads/2024/05/Neoclassic-rustic-home-interior-living-room-Decorilla-1024x574.jpeg",
    "https://media.designcafe.com/wp-content/uploads/2022/10/28103953/affordable-home-interiors-with-homeinteriorskacaptain.jpg",
    "https://www.trade4asia.com/catalougeimage/image-one.jpg",
    "https://www.decorilla.com/online-decorating/wp-content/uploads/2020/06/modern-interior-design-living-room-by-decorilla-designer-mladen-c.jpeg",
    "https://explorehomesdecor.com/wp-content/uploads/2022/03/Modern-Interior-Design00.jpg",
    "https://i.pinimg.com/736x/8e/a1/17/8ea11790de670cfef3b6f63e6f9fcdf2.jpg",
    "https://fancyhouse-design.com/wp-content/uploads/2023/11/In-this-open-plan-apartment-the-living-rooms-gray-theme-is-highlighted-by-a-sleek-TV-and-matching-furniture.jpg",
    "https://media.istockphoto.com/id/1432543179/photo/light-kitchen-interior-with-bar-countertop-and-seats-shelves-and-panoramic-window.jpg?s=612x612&w=0&k=20&c=OuTbQDEiT_Pcs_FILVNkjyKpt__ADDS4FbSwjFs6kRs=",
    "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2024/05/Principle-of-Scale-and-Proportion-17-0502010069.jpg",
    "https://slatsolution.com/cdn/shop/articles/DALL_E_2024-06-03_12.05.32_-_A_luxurious_living_room_featuring_elegant_wooden_slat_wall_panels_with_a_consistent_texture_and_style._The_room_is_decorated_with_high-end_furniture.webp?v=1717441552",
    "https://i.pinimg.com/736x/7e/e2/56/7ee2569fb6fe306ecaad1d18c78ea362.jpg",
    "https://www.home-designing.com/wp-content/uploads/2017/05/wood-white-and-charcoal-modern-exterior-paint-themes.jpg",
    "https://www.home-designing.com/wp-content/uploads/2017/05/wood-white-and-charcoal-modern-exterior-paint-themes.jpg",
    "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/202209/20-exterior-house-designs/home-exterior-design.jpg",
    "https://www.nichiha.com/uploads/blog/Our-9-Favorite-Exterior-Design-Trends-for-Modern-Homes-in-2021/Nichiha-NichiProduct-Residential.jpg?t=1628115204",
    "https://www.southernliving.com/thmb/jHFp1WEb5dIxmME3AcNodhpGJNg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2445301_beste_022_0-eae0c6e7188b4581b79740fd9782b60f.jpg",
    "https://www.homestratosphere.com/wp-content/uploads/2017/07/beach-decker-exterior-2-sep112019-min.jpg",
    "https://cdn.houseplansservices.com/product/pk8ecmlmjnbibk8r5fr01oje77/w800x533.jpg?v=2",
    "https://beachlifebliss.com/wp-content/uploads/2019/08/Blue-Coastal-Beach-House-Exterior-2-1024x683.jpg",
    "https://d1h3pk8iipmcfn.cloudfront.net/blog/wp-content/uploads/2021/07/16012519/Annie-Santulli-Designs-photo-by-Robert-Brantley-Photography-940x710.jpeg",
    "https://www.casuallycoastal.com/wp-content/uploads/2023/09/beach-house-exterior-colors-8-1440x962.jpg",
    "https://www.shutterstock.com/image-photo/beautiful-new-florida-house-palm-600nw-795989929.jpg",
    "https://i.ytimg.com/vi/XdR-cgN7fJw/maxresdefault.jpg",
    "https://sugarsbeach.com/wp-content/uploads/2018/03/Coca-Cabana-Exterior.jpg",
    "https://www.southernliving.com/thmb/t1xKMkIpESmIzsIo9qhkhrfufRc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/exterior_1_2512901_baldh67317-1-1d7510752632440fb2e04f56b796def9.jpg",
    "https://cdn.decoist.com/wp-content/uploads/2019/04/Beach-style-home-exterior-in-light-gray-and-white-is-a-showstopper.jpg",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/594531993.jpg?k=cd349bfc0f8b766e48e5c624b38a7222fc83980d4649b3452ca94aec4531ed38&o=&hp=1",
    "https://onekindesign.com/wp-content/uploads/2022/06/Contemporary-Beach-House-Brandon-Architects-36-1-Kindesign.jpg",
    "https://www.nolanpainting.com/wp-content/uploads/2023/08/Wucevy1M-1920x1359.jpeg",
    "https://www.nichiha.com/uploads/blog/what-is-the-best-siding-material-for-beach-houses-and-coastal-homes/Nichiha-Residential-ConcreteSeries-DesignerSeries-EmpireBlock-IndustrialBlock-Illumination-Modern.jpg?t=1660157219",
  ];

  const randomNum = () => {
    return Math.floor(Math.random() * imageUrl.length);
  };

  const { height, width } = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
        <Text style={{ fontSize: 17 }}>
          Gallery{" "}
          <Text style={{ fontSize: 17, color: "#0061FF", fontWeight: "bold" }}>
            (10)
          </Text>
        </Text>
      </View>

      <View style={styles.container}>
        {Array.from({ length: 10 }).map(() => {
          return (
            <View style={styles.imageRow}>
              <Image
                source={{ uri: imageUrl[randomNum()] }}
                style={styles.image}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ListingGallery;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 80,
  },
  imageRow: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 10,
  },
});
