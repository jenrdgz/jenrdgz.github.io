export function Footer() {
    return (
      <div className="footer">
        <div className="leftFooter">
        © 2022 JENNY RODRIGUEZ. <br />
        ALL RIGHTS RESERVED.
        </div>
        <div className="rightFooter">
          <a href="">
            <img src={require("../resources/moo.png")} />
          </a>
          <a href="">
            <img src={require("../resources/moo.png")} />
          </a>
          <a href="">
            <img src={require("../resources/moo.png")} />
          </a>
        </div>
      </div>  
      
    );
}