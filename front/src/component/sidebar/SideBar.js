import React from "react"
import "./SideBar.css"


export default function Sidebar(){

  return(
<div>
        <div className="sideBarre">
          <h1 className="t-name">Cotumichioo</h1>
          <hr className="t-hr"></hr>
          <div className="divSelect">
            {/* <select>
              <option value="0">Categorie:</option>
              <option value="1">Costumes</option>
              <option value="2">Chemise</option>
              <option value="3">Accéssoires</option>
            </select>

            <select>
              <option value="0">Vêtements:</option>
              <option value="1">Veste</option>
              <option value="2">Gilet</option>
              <option value="3">Gilet</option>
            </select> */}

            <div className="user-box">
              <div className="user-id">
                <div className="user-name">Catégorie</div>
                <div className="dropdown-arrow"></div>
                <div className="dropdown-menu">
                  <ul>
                    <li>Costumes</li>
                    <li>Chemise</li>
                    <li>Vêtements</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="user-box">
              <div className="user-id">
                <div className="user-name">Vêtements</div>
                <div className="dropdown-arrow"></div>
                <div className="dropdown-menu">
                  <ul>
                    <li>Veste</li>
                    <li>Gilet</li>
                    <li>Gilet</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="user-box">
              <div className="user-id">
                <div className="user-name">Accéssoires</div>
                <div className="dropdown-arrow"></div>
                <div className="dropdown-menu">
                  <ul>
                    <li>Ceinture</li>
                    <li>Cravate</li>
                    <li>Pull</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
       ) }