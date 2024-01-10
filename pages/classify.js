import Image from "next/image";
import distortion from "../img/distortion.png";
import iteration0 from "../img/iteration0.png";
import iteration1 from "../img/iteration1.png";
import iteration2 from "../img/iteration2.png";
import nn0 from "../img/nn0.png";
import nn1 from "../img/nn1.png";
import nn2 from "../img/nn2.png";
import nn3 from "../img/nn3.png";

export default function Classify() {
  return (
    <div className="classify-main">
      <h1 className="title">Classification</h1>
      <p className="classify">
        This past semester, in Artificial Intelligence, we were instructed to
        create a iris classifier, using two methods: k-means clustering and a
        neural network.
      </p>
      <div className="classify-horizontal">
        <div className="classify-contents">
          <h1 className="title">K-Means Clustering</h1>
          <p>
            For this project, I started the kMeans part simply using an array of
            arrays to store the Iris data, before realizing the benefit of using
            numpy, which I then used for the Neural Network. To actually perform
            kMeans, I started by using a constant seed so that the random
            generator would still give the same results each time. Then I pick k
            “random” sample means, and loop through each flower and each sample
            and add the flowers to the closest sample mean. Once fully through,
            I update the sample means and repeat the loop until we reach
            convergence (previous means = current means).
          </p>
          <p>
            Shown below is a graph of Distortion vs. Iterations which measures
            the overall distortion of all clusters measured over time.
          </p>
          <Image src={distortion} width={400} className="pic" />
          <p>
            To visualize the running of K-Means clustering, I have attached
            below the initial means, an intermediate clustering, and the final,
            converged means.
          </p>
          <Image src={iteration0} width={400} className="pic" />
          <Image src={iteration1} width={400} className="pic" />
          <Image src={iteration2} width={400} className="pic" />
        </div>
        <div className="classify-contents">
          <h1 className="title">Neural Network</h1>
          <p>
            For the neural network code, I decided to change the system I used
            for the kMeans and instead use numpy arrays for more options and I
            used plotly for the graphs instead of matplotlib. To actually run
            the neural network, I ran MSE which calculates the mean squared
            error using my prediction function in combination with the sigmoid
            function (used as activation). Then I ran the plot_boundary function
            which plots a boundary line in between the two clusters (2&3). The
            MSE function takes in the data vectors, the parameters defining the
            neural network (w, b) and the pattern classes.
          </p>
          <p>
            The neural network output, was much less pretty. This, however, is
            easily explained. The classifier classifies on 4 variables: petal
            length, petal width, sepal length and sepal width. The graph,
            however, only plots petal length and width.
          </p>
          <p>
            The k-means classifier <i>also</i> classifies on all 4 variables,
            but the neural network is just so much better that it weights the
            variables much more accurately.
          </p>
          <p>
            To train the Neural Network, I started with initial weights of [.1,
            -.1, .1, .1] (semi-random) and an initial bias of -.7 (somewhere
            around the range for my best guess). The network ran for 100,000
            iterations with a learning rate of .0001. the first three iterations
            are shown below.
          </p>
          <Image src={nn0} width={400} className="pic" />
          <Image src={nn1} width={400} className="pic" />
          <Image src={nn2} width={400} className="pic" />
          <p>
            As shown in the graphs above, the learning for a small step size
            still has noticeable changes early, but once the loop is almost
            done, the changes become barely noticeable. The learning works best
            for a low step size (I used .0001) and a large number of iterations
            (I used 10000). Once the graph runs through 100,000 iterations with
            a step size .0001, the MSE converges to 0.028491. The final graph is
            shown below:
          </p>
          <Image src={nn3} width={400} className="pic" />
          <p className="link">
            If you'd like to see more, and even run the code, check out my
            GitHub page:{" "}
            <a href="https://github.com/gsk49/artificial-intelligence/tree/main/AI_P2">
              Click Here!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
