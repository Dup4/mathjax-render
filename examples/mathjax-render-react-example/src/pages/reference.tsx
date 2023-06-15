import type { NextPage } from "next";

import { Grid } from "@nextui-org/react";

import BasicLayouts from "@/layouts/basicLayouts";
import { MathJaxNode } from "@/components/mathjaxNode";

interface ReferenceProps {
  texList: string[];
}

const Reference: NextPage<ReferenceProps> = ({}) => {
  const texList = [
    String.raw`e^x`,
    String.raw`\begin{matrix}
  1 & x & x^2 \\
  1 & y & y^2 \\
  1 & z & z^2 \\
  \end{matrix}`,
    String.raw`\begin{pmatrix}1&2\\3&4\\ \end{pmatrix}`,
    String.raw`\begin{bmatrix}1&2\\3&4\\ \end{bmatrix}`,
    String.raw`\begin{Bmatrix}1&2\\3&4\\ \end{Bmatrix}`,
    String.raw`\begin{vmatrix}1&2\\3&4\\ \end{vmatrix}`,
    String.raw`\begin{Vmatrix}1&2\\3&4\\ \end{Vmatrix}`,
    String.raw`\begin{pmatrix}
  1 & a_1 & a_1^2 & \cdots & a_1^n \\
  1 & a_2 & a_2^2 & \cdots & a_2^n \\
  \vdots  & \vdots& \vdots & \ddots & \vdots \\
  1 & a_m & a_m^2 & \cdots & a_m^n
  \end{pmatrix}`,
    String.raw`\left[
  \begin{array}{cc|c}
      1&2&3\\
      4&5&6
  \end{array}
  \right]`,
    String.raw`\begin{pmatrix}
  a & b\\
  c & d\\
  \hline
  1 & 0\\
  0 & 1
  \end{pmatrix}`,
    String.raw`\bigl( \begin{smallmatrix} a & b \\ c & d \end{smallmatrix} \bigr)`,
    String.raw`\begin{align}
  \sqrt{37} & = \sqrt{\frac{73^2-1}{12^2}} \\
  & = \sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\
  & = \sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\
  & = \frac{73}{12}\sqrt{1 - \frac{1}{73^2}} \\
  & \approx \frac{73}{12}\left(1 - \frac{1}{2\cdot73^2}\right)
  \end{align}`,
    String.raw`\begin{align}
  f(x)&=\left(x^3\right)+\left(x^3+x^2+x^1\right)+\left(x^3+x^2\right) \\
  f'(x)&=\left(3x^2+2x+1\right)+\left(3x^2+2x\right) \\
  f''(x)&=\left(6x+2\right) \\
  \end{align}`,
    String.raw`f(n) =
  \begin{cases}
  n/2,  & \text{if $n$ is even} \\
  3n+1, & \text{if $n$ is odd}
  \end{cases}`,
    String.raw`\left.
  \begin{array}{l}
  \text{if $n$ is even:}&n/2\\
  \text{if $n$ is odd:}&3n+1
  \end{array}
  \right\}
  =f(n)`,
    String.raw`f(n) =
  \begin{cases}
  \frac{n}{2},  & \text{if $n$ is even} \\[2ex]
  3n+1, & \text{if $n$ is odd}
  \end{cases}`,
    String.raw`\begin{array}{c|lcr}
  n & \text{Left} & \text{Center} & \text{Right} \\
  \hline
  1 & 0.24 & 1 & 125 \\
  2 & -1 & 189 & -8 \\
  3 & -20 & 2000 & 1+10i
  \end{array}`,
    String.raw`% outer vertical array of arrays
  \begin{array}{c}
  % inner horizontal array of arrays
  \begin{array}{cc}
  % inner array of minimum values
  \begin{array}{c|cccc}
  \text{min} & 0 & 1 & 2 & 3\\
  \hline
  0 & 0 & 0 & 0 & 0\\
  1 & 0 & 1 & 1 & 1\\
  2 & 0 & 1 & 2 & 2\\
  3 & 0 & 1 & 2 & 3
  \end{array}
  &
  % inner array of maximum values
  \begin{array}{c|cccc}
  \text{max}&0&1&2&3\\
  \hline
  0 & 0 & 1 & 2 & 3\\
  1 & 1 & 1 & 2 & 3\\
  2 & 2 & 2 & 2 & 3\\
  3 & 3 & 3 & 3 & 3
  \end{array}
  \end{array}
  \\
  % inner array of delta values
  \begin{array}{c|cccc}
  \Delta&0&1&2&3\\
  \hline
  0 & 0 & 1 & 2 & 3\\
  1 & 1 & 0 & 1 & 2\\
  2 & 2 & 1 & 0 & 1\\
  3 & 3 & 2 & 1 & 0
  \end{array}
  \end{array}`,
    String.raw`\begin{array}{ll} \hfill\mathrm{Bad}\hfill & \hfill\mathrm{Better}\hfill \\ \hline \\ e^{i\frac{\pi}2} \quad e^{\frac{i\pi}2}& e^{i\pi/2} \\ \int_{-\frac\pi2}^\frac\pi2 \sin x\,dx & \int_{-\pi/2}^{\pi/2}\sin x\,dx \\ \end{array}`,
    String.raw`\left\{
  \begin{array}{c}
  a_1x+b_1y+c_1z=d_1 \\
  a_2x+b_2y+c_2z=d_2 \\
  a_3x+b_3y+c_3z=d_3
  \end{array}
  \right.`,
    String.raw`\begin{cases}
  a_1x+b_1y+c_1z=d_1 \\
  a_2x+b_2y+c_2z=d_2 \\
  a_3x+b_3y+c_3z=d_3
  \end{cases}`,
    String.raw`\left\{
  \begin{aligned}
  a_1x+b_1y+c_1z &=d_1+e_1 \\
  a_2x+b_2y&=d_2 \\
  a_3x+b_3y+c_3z &=d_3
  \end{aligned}
  \right.`,
    String.raw`\left\{
    \begin{array}{ll}
    a_1x+b_1y+c_1z &=d_1+e_1 \\
    a_2x+b_2y &=d_2 \\
    a_3x+b_3y+c_3z &=d_3
    \end{array}
    \right.`,
    String.raw`\begin{cases}
  a_1x+b_1y+c_1z=\frac{p_1}{q_1} \\[2ex]
  a_2x+b_2y+c_2z=\frac{p_2}{q_2} \\[2ex]
  a_3x+b_3y+c_3z=\frac{p_3}{q_3}
  \end{cases}`,
    String.raw`\begin{cases}
  a_1x+b_1y+c_1z=\frac{p_1}{q_1} \\
  a_2x+b_2y+c_2z=\frac{p_2}{q_2} \\
  a_3x+b_3y+c_3z=\frac{p_3}{q_3}
  \end{cases}`,
    String.raw`\left\{ \begin{array}{l}
  0 = c_x-a_{x0}-d_{x0}\dfrac{(c_x-a_{x0})\cdot d_{x0}}{\|d_{x0}\|^2} + c_x-a_{x1}-d_{x1}\dfrac{(c_x-a_{x1})\cdot d_{x1}}{\|d_{x1}\|^2} \\[2ex]
  0 = c_y-a_{y0}-d_{y0}\dfrac{(c_y-a_{y0})\cdot d_{y0}}{\|d_{y0}\|^2} + c_y-a_{y1}-d_{y1}\dfrac{(c_y-a_{y1})\cdot d_{y1}}{\|d_{y1}\|^2} \end{array} \right.`,
    String.raw`\begin{array}{|rc|}
  \hline
  \verb+\color{black}{text}+ & \color{black}{text} \\
  \verb+\color{gray}{text}+ & \color{gray}{text} \\
  \verb+\color{silver}{text}+ & \color{silver}{text} \\
  \verb+\color{white}{text}+ & \color{white}{text} \\
  \hline
  \verb+\color{maroon}{text}+ & \color{maroon}{text} \\
  \verb+\color{red}{text}+ & \color{red}{text} \\
  \verb+\color{yellow}{text}+ & \color{yellow}{text} \\
  \verb+\color{lime}{text}+ & \color{lime}{text} \\
  \verb+\color{olive}{text}+ & \color{olive}{text} \\
  \verb+\color{green}{text}+ & \color{green}{text} \\
  \verb+\color{teal}{text}+ & \color{teal}{text} \\
  \verb+\color{aqua}{text}+ & \color{aqua}{text} \\
  \verb+\color{blue}{text}+ & \color{blue}{text} \\
  \verb+\color{navy}{text}+ & \color{navy}{text} \\
  \verb+\color{purple}{text}+ & \color{purple}{text} \\
  \verb+\color{fuchsia}{text}+ & \color{magenta}{text} \\
  \hline
  \end{array}`,
    String.raw`\begin{CD}
  A @>>> B @>{\text{very long label}}>> C \\
  @. @AAA @| \\
  D @= E @<<< F
  \end{CD}`,
    String.raw`\begin{CD}
  RCOHR'SO_3Na @>{\text{Hydrolysis,$\Delta, Dil.HCl$}}>> (RCOR')+NaCl+SO_2+ H_2O
  \end{CD}`,
    String.raw`x = a_0 + \cfrac{1^2}{a_1
                      + \cfrac{2^2}{a_2
                      + \cfrac{3^2}{a_3 + \cfrac{4^4}{a_4 + \cdots}}}}`,
    String.raw`x = a_0 + \frac{1^2}{a_1
                      + \frac{2^2}{a_2
                      + \frac{3^2}{a_3 + \frac{4^4}{a_4 + \cdots}}}}`,
    String.raw`x = a_0 + \frac{1^2}{a_1+}
                      \frac{2^2}{a_2+}
                      \frac{3^2}{a_3 +} \frac{4^4}{a_4 +} \cdots`,
    String.raw`\cfrac{a_{1}}{b_{1}+\cfrac{a_{2}}{b_{2}+\cfrac{a_{3}}{b_{3}+\ddots }}}=   {\genfrac{}{}{}{}{a_1}{b_1}}   {\genfrac{}{}{0pt}{}{}{+}}   {\genfrac{}{}{}{}{a_2}{b_2}}   {\genfrac{}{}{0pt}{}{}{+}}   {\genfrac{}{}{}{}{a_3}{b_3}}   {\genfrac{}{}{0pt}{}{}{+\dots}}`,
    String.raw`\mathop{\LARGE\mathrm K}_{i=1}^\infty \frac{a_i}{b_i}`,
    String.raw`f\left(
      \left[
          \frac{
              1+\left\{x,y\right\}
          }{
              \left(
                      \frac{x}{y}+\frac{y}{x}
              \right)
              \left(u+1\right)
          }+a
      \right]^{3/2}
  \right)`,
    String.raw`\begin{aligned}
  a=&\left(1+2+3+  \cdots \right. \\
  & \cdots+ \left. \infty-2+\infty-1+\infty\right)
  \end{aligned}`,
    String.raw`\left\langle
  q
  \middle\|
  \frac{\frac{x}{y}}{\frac{u}{v}}
  \middle|
  p
  \right\rangle`,
    String.raw`\bbox[yellow]
  {
  e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
  \qquad (1)
  }`,
    String.raw`\bbox[yellow,5px]
  {
  e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
  \qquad (1)
  }`,
    String.raw`\bbox[5px,border:2px solid red]
  {
  e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
  \qquad (2)
  }`,
    String.raw`\bbox[yellow,5px,border:2px solid red]
  {
  e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
  \qquad (1)
  }`,
    String.raw`\spadesuit\quad\heartsuit\quad\diamondsuit\quad\clubsuit`,
    String.raw`\color{red}{\heartsuit}\quad\color{red}{\diamondsuit}`,
    String.raw`♠\quad♡\quad♢\quad♣\\
  ♤\quad♥\quad♦\quad♧`,
    String.raw`\begin{array}{c|rrrr}& x^3 & x^2 & x^1 &  x^0\\ & 1 & -6 & 11 & -6\\ {\color{red}1} & \downarrow & 1 & -5 & 6\\ \hline & 1 & -5 & 6 & |\phantom{-} {\color{blue}0} \end{array}`,
    String.raw`x^3-6x^2+11x-6=(x-{\color{red}1})(x^2-5x+6)+{\color{blue}0}`,
    String.raw`\begin{array}
  45^\text{o} \\
  45^o \\
  45^\circ \\
  90°
  \end{array}`,
    String.raw`\sum_{n=1}^\infty \frac{1}{n^2} \to
  \textstyle \sum_{n=1}^\infty \frac{1}{n^2} \to
  \displaystyle \sum_{n=1}^\infty \frac{1}{n^2}`,
    String.raw`e=mc^2 \tag{1}`,
    String.raw`\begin{array}{rrrrrrr|r}
                  &  x_1 &  x_2 &  x_3 &  s_1 &    s_2 &  s_3 &       \\     \hline
          s_1 &   -2 &    0 &   -2 &    1 &      0 &    0 &   -60 \\
          s_2 &   -2 & -4^* &   -5 &    0 &      1 &    0 &   -70 \\
          s_3 &    0 &   -3 &   -1 &    0 &      0 &    1 &   -27 \\ \hdashline
                  &    8 &   10 &   25 &    0 &      0 &    0 &     0 \\
  \text{ratio} &   -4 & -5/2 &   -5 &      &        &      &       \\     \hline
          s_1 & -2^* &    0 &   -2 &    1 &      0 &    0 &   -60 \\
          x_2 &  1/2 &    1 &  5/4 &    0 &   -1/4 &    0 &  35/2 \\
          s_3 &  3/2 &    0 & 11/4 &    0 &   -3/4 &    1 &  51/2 \\ \hdashline
                  &    3 &    0 & 25/2 &    0 &    5/2 &    0 &  -175 \\
  \text{ratio} & -3/2 &      & 25/4 &      &        &      &       \\     \hline
          x_1 &    1 &    0 &    1 & -1/2 &      0 &    0 &    30 \\
          x_2 &    0 &    1 &  3/4 &  1/4 &   -1/4 &    0 &   5/2 \\
          s_3 &    0 &    0 &  5/4 &  3/4 & -3/4^* &    1 & -39/2 \\ \hdashline
                  &    0 &    0 & 19/2 &  3/2 &    5/2 &    0 &  -265 \\
  \text{ratio} &      &      &      &      &  \dots &      &       \\     \hline
          x_1 &    1 &    0 &    1 & -1/2 &      0 &    0 &    30 \\
          x_2 &    0 &    1 &  1/3 &    0 &      0 & -1/3 &     9 \\
          s_2 &    0 &    0 & -5/3 &   -1 &      1 & -4/3 &    26 \\ \hdashline
                  &    0 &    0 & 41/3 &    4 &      0 & 10/3 &  -330
  \end{array}`,
  ];

  return (
    <BasicLayouts>
      <Grid.Container
        gap={1}
        className="flex flex-1 justify-center items-center flex-col"
        style={{ minHeight: "calc(100vh - 300px)" }}>
        {texList.map((tex, index) => (
          <Grid key={index}>
            <MathJaxNode tex={tex} display={true}></MathJaxNode>
          </Grid>
        ))}
      </Grid.Container>
    </BasicLayouts>
  );
};

export async function getStaticProps() {
  const texList = [
    String.raw`e^x`,
    String.raw`\begin{matrix}
  1 & x & x^2 \\
  1 & y & y^2 \\
  1 & z & z^2 \\
  \end{matrix}`,
    String.raw`\begin{pmatrix}1&2\\3&4\\ \end{pmatrix}`,
    String.raw`\begin{bmatrix}1&2\\3&4\\ \end{bmatrix}`,
    String.raw`\begin{Bmatrix}1&2\\3&4\\ \end{Bmatrix}`,
    String.raw`\begin{vmatrix}1&2\\3&4\\ \end{vmatrix}`,
    String.raw`\begin{Vmatrix}1&2\\3&4\\ \end{Vmatrix}`,
    String.raw`\begin{pmatrix}
  1 & a_1 & a_1^2 & \cdots & a_1^n \\
  1 & a_2 & a_2^2 & \cdots & a_2^n \\
  \vdots  & \vdots& \vdots & \ddots & \vdots \\
  1 & a_m & a_m^2 & \cdots & a_m^n
  \end{pmatrix}`,
    String.raw`\left[
  \begin{array}{cc|c}
      1&2&3\\
      4&5&6
  \end{array}
  \right]`,
    String.raw`\begin{pmatrix}
  a & b\\
  c & d\\
  \hline
  1 & 0\\
  0 & 1
  \end{pmatrix}`,
    String.raw`\bigl( \begin{smallmatrix} a & b \\ c & d \end{smallmatrix} \bigr)`,
    String.raw`\begin{align}
  \sqrt{37} & = \sqrt{\frac{73^2-1}{12^2}} \\
  & = \sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\
  & = \sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\
  & = \frac{73}{12}\sqrt{1 - \frac{1}{73^2}} \\
  & \approx \frac{73}{12}\left(1 - \frac{1}{2\cdot73^2}\right)
  \end{align}`,
    String.raw`\begin{align}
  f(x)&=\left(x^3\right)+\left(x^3+x^2+x^1\right)+\left(x^3+x^2\right) \\
  f'(x)&=\left(3x^2+2x+1\right)+\left(3x^2+2x\right) \\
  f''(x)&=\left(6x+2\right) \\
  \end{align}`,
    String.raw`f(n) =
  \begin{cases}
  n/2,  & \text{if $n$ is even} \\
  3n+1, & \text{if $n$ is odd}
  \end{cases}`,
    String.raw`\left.
  \begin{array}{l}
  \text{if $n$ is even:}&n/2\\
  \text{if $n$ is odd:}&3n+1
  \end{array}
  \right\}
  =f(n)`,
    String.raw`f(n) =
  \begin{cases}
  \frac{n}{2},  & \text{if $n$ is even} \\[2ex]
  3n+1, & \text{if $n$ is odd}
  \end{cases}`,
    String.raw`\begin{array}{c|lcr}
  n & \text{Left} & \text{Center} & \text{Right} \\
  \hline
  1 & 0.24 & 1 & 125 \\
  2 & -1 & 189 & -8 \\
  3 & -20 & 2000 & 1+10i
  \end{array}`,
    String.raw`% outer vertical array of arrays
  \begin{array}{c}
  % inner horizontal array of arrays
  \begin{array}{cc}
  % inner array of minimum values
  \begin{array}{c|cccc}
  \text{min} & 0 & 1 & 2 & 3\\
  \hline
  0 & 0 & 0 & 0 & 0\\
  1 & 0 & 1 & 1 & 1\\
  2 & 0 & 1 & 2 & 2\\
  3 & 0 & 1 & 2 & 3
  \end{array}
  &
  % inner array of maximum values
  \begin{array}{c|cccc}
  \text{max}&0&1&2&3\\
  \hline
  0 & 0 & 1 & 2 & 3\\
  1 & 1 & 1 & 2 & 3\\
  2 & 2 & 2 & 2 & 3\\
  3 & 3 & 3 & 3 & 3
  \end{array}
  \end{array}
  \\
  % inner array of delta values
  \begin{array}{c|cccc}
  \Delta&0&1&2&3\\
  \hline
  0 & 0 & 1 & 2 & 3\\
  1 & 1 & 0 & 1 & 2\\
  2 & 2 & 1 & 0 & 1\\
  3 & 3 & 2 & 1 & 0
  \end{array}
  \end{array}`,
    String.raw`\begin{array}{ll} \hfill\mathrm{Bad}\hfill & \hfill\mathrm{Better}\hfill \\ \hline \\ e^{i\frac{\pi}2} \quad e^{\frac{i\pi}2}& e^{i\pi/2} \\ \int_{-\frac\pi2}^\frac\pi2 \sin x\,dx & \int_{-\pi/2}^{\pi/2}\sin x\,dx \\ \end{array}`,
    String.raw`\left\{
  \begin{array}{c}
  a_1x+b_1y+c_1z=d_1 \\
  a_2x+b_2y+c_2z=d_2 \\
  a_3x+b_3y+c_3z=d_3
  \end{array}
  \right.`,
    String.raw`\begin{cases}
  a_1x+b_1y+c_1z=d_1 \\
  a_2x+b_2y+c_2z=d_2 \\
  a_3x+b_3y+c_3z=d_3
  \end{cases}`,
    String.raw`\left\{
  \begin{aligned}
  a_1x+b_1y+c_1z &=d_1+e_1 \\
  a_2x+b_2y&=d_2 \\
  a_3x+b_3y+c_3z &=d_3
  \end{aligned}
  \right.`,
    String.raw`\left\{
    \begin{array}{ll}
    a_1x+b_1y+c_1z &=d_1+e_1 \\
    a_2x+b_2y &=d_2 \\
    a_3x+b_3y+c_3z &=d_3
    \end{array}
    \right.`,
    String.raw`\begin{cases}
  a_1x+b_1y+c_1z=\frac{p_1}{q_1} \\[2ex]
  a_2x+b_2y+c_2z=\frac{p_2}{q_2} \\[2ex]
  a_3x+b_3y+c_3z=\frac{p_3}{q_3}
  \end{cases}`,
    String.raw`\begin{cases}
  a_1x+b_1y+c_1z=\frac{p_1}{q_1} \\
  a_2x+b_2y+c_2z=\frac{p_2}{q_2} \\
  a_3x+b_3y+c_3z=\frac{p_3}{q_3}
  \end{cases}`,
    String.raw`\left\{ \begin{array}{l}
  0 = c_x-a_{x0}-d_{x0}\dfrac{(c_x-a_{x0})\cdot d_{x0}}{\|d_{x0}\|^2} + c_x-a_{x1}-d_{x1}\dfrac{(c_x-a_{x1})\cdot d_{x1}}{\|d_{x1}\|^2} \\[2ex]
  0 = c_y-a_{y0}-d_{y0}\dfrac{(c_y-a_{y0})\cdot d_{y0}}{\|d_{y0}\|^2} + c_y-a_{y1}-d_{y1}\dfrac{(c_y-a_{y1})\cdot d_{y1}}{\|d_{y1}\|^2} \end{array} \right.`,
    String.raw`\begin{array}{|rc|}
  \hline
  \verb+\color{black}{text}+ & \color{black}{text} \\
  \verb+\color{gray}{text}+ & \color{gray}{text} \\
  \verb+\color{silver}{text}+ & \color{silver}{text} \\
  \verb+\color{white}{text}+ & \color{white}{text} \\
  \hline
  \verb+\color{maroon}{text}+ & \color{maroon}{text} \\
  \verb+\color{red}{text}+ & \color{red}{text} \\
  \verb+\color{yellow}{text}+ & \color{yellow}{text} \\
  \verb+\color{lime}{text}+ & \color{lime}{text} \\
  \verb+\color{olive}{text}+ & \color{olive}{text} \\
  \verb+\color{green}{text}+ & \color{green}{text} \\
  \verb+\color{teal}{text}+ & \color{teal}{text} \\
  \verb+\color{aqua}{text}+ & \color{aqua}{text} \\
  \verb+\color{blue}{text}+ & \color{blue}{text} \\
  \verb+\color{navy}{text}+ & \color{navy}{text} \\
  \verb+\color{purple}{text}+ & \color{purple}{text} \\
  \verb+\color{fuchsia}{text}+ & \color{magenta}{text} \\
  \hline
  \end{array}`,
    String.raw`\begin{CD}
  A @>>> B @>{\text{very long label}}>> C \\
  @. @AAA @| \\
  D @= E @<<< F
  \end{CD}`,
    String.raw`\begin{CD}
  RCOHR'SO_3Na @>{\text{Hydrolysis,$\Delta, Dil.HCl$}}>> (RCOR')+NaCl+SO_2+ H_2O
  \end{CD}`,
    String.raw`x = a_0 + \cfrac{1^2}{a_1
                      + \cfrac{2^2}{a_2
                      + \cfrac{3^2}{a_3 + \cfrac{4^4}{a_4 + \cdots}}}}`,
    String.raw`x = a_0 + \frac{1^2}{a_1
                      + \frac{2^2}{a_2
                      + \frac{3^2}{a_3 + \frac{4^4}{a_4 + \cdots}}}}`,
    String.raw`x = a_0 + \frac{1^2}{a_1+}
                      \frac{2^2}{a_2+}
                      \frac{3^2}{a_3 +} \frac{4^4}{a_4 +} \cdots`,
    String.raw`\cfrac{a_{1}}{b_{1}+\cfrac{a_{2}}{b_{2}+\cfrac{a_{3}}{b_{3}+\ddots }}}=   {\genfrac{}{}{}{}{a_1}{b_1}}   {\genfrac{}{}{0pt}{}{}{+}}   {\genfrac{}{}{}{}{a_2}{b_2}}   {\genfrac{}{}{0pt}{}{}{+}}   {\genfrac{}{}{}{}{a_3}{b_3}}   {\genfrac{}{}{0pt}{}{}{+\dots}}`,
    String.raw`\mathop{\LARGE\mathrm K}_{i=1}^\infty \frac{a_i}{b_i}`,
    String.raw`f\left(
      \left[
          \frac{
              1+\left\{x,y\right\}
          }{
              \left(
                      \frac{x}{y}+\frac{y}{x}
              \right)
              \left(u+1\right)
          }+a
      \right]^{3/2}
  \right)`,
    String.raw`\begin{aligned}
  a=&\left(1+2+3+  \cdots \right. \\
  & \cdots+ \left. \infty-2+\infty-1+\infty\right)
  \end{aligned}`,
    String.raw`\left\langle
  q
  \middle\|
  \frac{\frac{x}{y}}{\frac{u}{v}}
  \middle|
  p
  \right\rangle`,
    String.raw`\bbox[yellow]
  {
  e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
  \qquad (1)
  }`,
    String.raw`\bbox[yellow,5px]
  {
  e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
  \qquad (1)
  }`,
    String.raw`\bbox[5px,border:2px solid red]
  {
  e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
  \qquad (2)
  }`,
    String.raw`\bbox[yellow,5px,border:2px solid red]
  {
  e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
  \qquad (1)
  }`,
    String.raw`\spadesuit\quad\heartsuit\quad\diamondsuit\quad\clubsuit`,
    String.raw`\color{red}{\heartsuit}\quad\color{red}{\diamondsuit}`,
    String.raw`♠\quad♡\quad♢\quad♣\\
  ♤\quad♥\quad♦\quad♧`,
    String.raw`\begin{array}{c|rrrr}& x^3 & x^2 & x^1 &  x^0\\ & 1 & -6 & 11 & -6\\ {\color{red}1} & \downarrow & 1 & -5 & 6\\ \hline & 1 & -5 & 6 & |\phantom{-} {\color{blue}0} \end{array}`,
    String.raw`x^3-6x^2+11x-6=(x-{\color{red}1})(x^2-5x+6)+{\color{blue}0}`,
    String.raw`\begin{array}
  45^\text{o} \\
  45^o \\
  45^\circ \\
  90°
  \end{array}`,
    String.raw`\sum_{n=1}^\infty \frac{1}{n^2} \to
  \textstyle \sum_{n=1}^\infty \frac{1}{n^2} \to
  \displaystyle \sum_{n=1}^\infty \frac{1}{n^2}`,
    String.raw`e=mc^2 \tag{1}`,
    String.raw`\begin{array}{rrrrrrr|r}
                  &  x_1 &  x_2 &  x_3 &  s_1 &    s_2 &  s_3 &       \\     \hline
          s_1 &   -2 &    0 &   -2 &    1 &      0 &    0 &   -60 \\
          s_2 &   -2 & -4^* &   -5 &    0 &      1 &    0 &   -70 \\
          s_3 &    0 &   -3 &   -1 &    0 &      0 &    1 &   -27 \\ \hdashline
                  &    8 &   10 &   25 &    0 &      0 &    0 &     0 \\
  \text{ratio} &   -4 & -5/2 &   -5 &      &        &      &       \\     \hline
          s_1 & -2^* &    0 &   -2 &    1 &      0 &    0 &   -60 \\
          x_2 &  1/2 &    1 &  5/4 &    0 &   -1/4 &    0 &  35/2 \\
          s_3 &  3/2 &    0 & 11/4 &    0 &   -3/4 &    1 &  51/2 \\ \hdashline
                  &    3 &    0 & 25/2 &    0 &    5/2 &    0 &  -175 \\
  \text{ratio} & -3/2 &      & 25/4 &      &        &      &       \\     \hline
          x_1 &    1 &    0 &    1 & -1/2 &      0 &    0 &    30 \\
          x_2 &    0 &    1 &  3/4 &  1/4 &   -1/4 &    0 &   5/2 \\
          s_3 &    0 &    0 &  5/4 &  3/4 & -3/4^* &    1 & -39/2 \\ \hdashline
                  &    0 &    0 & 19/2 &  3/2 &    5/2 &    0 &  -265 \\
  \text{ratio} &      &      &      &      &  \dots &      &       \\     \hline
          x_1 &    1 &    0 &    1 & -1/2 &      0 &    0 &    30 \\
          x_2 &    0 &    1 &  1/3 &    0 &      0 & -1/3 &     9 \\
          s_2 &    0 &    0 & -5/3 &   -1 &      1 & -4/3 &    26 \\ \hdashline
                  &    0 &    0 & 41/3 &    4 &      0 & 10/3 &  -330
  \end{array}`,
  ];

  return {
    props: {
      texList,
    },
  };
}

export default Reference;
