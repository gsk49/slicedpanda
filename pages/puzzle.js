import Image from "next/image";
import solvable from "../img/solvable.png";
import generated from "../img/generated.png";
import moves from "../img/moves.png";

export default function Puzzle() {
  return (
    <div className="puzzle-main">
      <h1 className="title">8 Puzzle</h1>
      <p className="puz-text">
        While taking Artificial Intelligence at CWRU, we were assigned to create
        two different agents that solve an 8 puzzle, given a starting state. One
        of these agents used A*, and the other used local beam search.
      </p>
      <div className="puzzle-container">
        <div className="puzzle-contents">
          <h1 className="title">A*</h1>
          <p>
            In my code I represent the puzzle state as an array of arrays which
            allowed me to easily visualize the puzzle and made it easy to move
            ‘b’ (e.g. you can check the row or column ‘b’ is in without having
            to do additional math, perhaps at the expense of taking up more
            space and being harder to navigate at times).
          </p>
          <p>
            For A*, I used two different heuristics. The first, h1, counts the
            number of tiles that are not in their expected states. This,
            however, misses many of the nuances of the puzzle, so I also used a
            second heuristic h2. H2, which is also called the manhattan
            distance, is the total sum of moves it would take for each tile to
            return to their goal state, fully unobstructed.
          </p>
        </div>
        <div className="puzzle-contents">
          <h1 className="title">Local Beam</h1>
          <p>
            Beam search, unlike A*, is a local search and is therefore neither
            optimal, nor complete. This means that beam search is not garunteed
            to find a solution, and if it does find a solution, it is not
            garunteed to be the best. However, when beam search does work, it
            often finds a solution with far fewer nodes generated, albeit
            usually with a longer path.
          </p>
          <p>
            Beam search works by picking the k best states, moving in every
            legal direction for each state, and then by iteratively choosing the
            k best of the newly generated states. For someone who is familiar
            with hill climbing, this is essentially the same (pick the best
            option every time), but with far lower odds of reaching a local
            minima.
          </p>
        </div>
      </div>
      <div>
        <h1 className="title">Experiments</h1>
        <p className="puz-text">
          After finishing the code, we were asked to run a series of experiments
          and to answer a few questions that test our understanding of the
          agents as well as our understanding of our code.
        </p>
        <div className="puzzle-container2">
          <div>
            <p>
              Experiment 1: How does the fraction of solvable puzzles from
              random initial states vary with the maxNodes limit?
            </p>
            <p>
              The fraction of solvable puzzles grows as the maxNodes limit
              grows. This is pretty intuitive, because as you are allowed to
              generate more nodes for the same puzzle, you could never solve the
              puzzle “less” than before (if you fully solve it once, you can’t
              unsuccessfully solve it in the future with more nodes allowed). To
              visualize this, I created a function that increments maxNodes from
              150 to 4500 with intervals of 150, and tested 100 random states.
            </p>
            <p>
              Though this graph suggests that beam and h2 generate nodes at a
              similar level, that is misleading. Beam actually generates far
              fewer nodes (in general), but with a small k value, there are many
              states that do not solve. The graph was far more misleading
              (suggesting that beam was less efficient) with a smaller k, so I
              decided to use the graph I did. TLDR: I used a very large k, such
              that beam is less efficient, but it works more often.
            </p>
          </div>
          <div className="puzzle-content2 puzzle-content3">
            <Image src={solvable} width={400} className="pic" />
          </div>
        </div>
        <div className="puzzle-container2">
          <div>
            <Image src={generated} width={400} className="pic" />
          </div>
          <div className="exp-text">
            <p>
              Experiment 2: For A* search, which heuristic is better, i.e.,
              generates a lower number of nodes?
            </p>
            <p>
              H2 is by far more efficient than H1, and always generates fewer
              nodes than H1. This can be viewed by the graph below.
            </p>
          </div>
        </div>
        <div className="puzzle-container2">
          <div className="exp-text">
            <p>
              Experiment 3: How does the solution length (number of moves needed
              to reach the goal state) vary across the three search methods?
            </p>
            <p>
              The solution for h1 and h2 is always optimal, so the number of
              moves will never change from one to another. Beam is NOT optimal,
              so it will always be the same, or worse than A-Star, usually being
              much worse. This is shown in the below graph. Note: Any time beam
              is shown lower than h1 or h2 (and only beam is lower), beam search
              failed to complete with the choice of k, so the total number of
              moves was set to 0.
            </p>
          </div>
          <div className="puzzle-content3">
            <Image src={moves} width={400} className="pic" />
          </div>
        </div>
        <p className="link puz-text">
          Still interested? Check out my GitHub Page{" "}
          <a
            href={
              "https://github.com/gsk49/artificial-intelligence/tree/main/8puzzle"
            }
          >
            Here!
          </a>
        </p>
      </div>
    </div>
  );
}
