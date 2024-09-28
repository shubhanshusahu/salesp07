import React from "react";
import { ProjectList, stackList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";
import { Tech, TechImg, TechName } from "../../About/AboutElements";
function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <ScrollAnimation
          animateIn="fadeInLeft"
          key={index}
        >
          <Card>
            <CardLeft>
              <img className="projImage" src={list.img} alt={list.name} />
            </CardLeft>
            <CardRight>
              <h4>{list.title}</h4>
              <p>{list.description}</p>
              <TechCardContainer>
                {list.tech_stack.map((tech, index) => (
                  // <TechCard key={index}>{tech}</TechCard>
                  <Tech key={index} className="tech">
                    <TechImg
                      src={
                        stackList.filter((stack) => tech=== stack.name)[0]?.img
                      }
                      alt={tech}
                    />
                    <TechName>{tech}</TechName>
                  </Tech>
                ))}
              </TechCardContainer>
              <BtnGroup>
                { list.github_url !== "" && list.github_url.length > 0 && (
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
                {list.Show_demo_btn && list.demo_url.length > 0 && (
                  <a
                    className="btn PrimaryBtn btn-shadow"
                    href={list.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo ➜
                  </a>
                )}
              </BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default ProjectCard;
