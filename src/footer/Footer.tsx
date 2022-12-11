export function Footer() {
    return (
      <div className="footer">
        <div className="leftFooter">
        © 2022 JENNY RODRIGUEZ. 
        </div>
        <div className="rightFooter">
          <a href="https://www.linkedin.com/in/jennyrodriguezdesign/">
            <img src={require("../resources/linkedln.png")} />
          </a>
          <a href="https://www.instagram.com/jennyrodriguezdesign/">
            <img src={require("../resources/insta.png")} />
          </a>
          <a href="">
            <img src={require("../resources/behance.png")} />
          </a>
        </div>
      </div>  
      
    );
}