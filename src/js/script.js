import { model } from "./model";
import { Site } from "./classes/Site";
import "../styles/style.css";
import { Sidebar } from "./classes/Sidebar";

const site = new Site("#site");

const sidebar = new Sidebar("#panel");

site.render(model);
sidebar.render();
