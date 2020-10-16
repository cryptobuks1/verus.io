
import SigTabWindow from '../components/sigTab'

const VerifySignatures = () => {
  return (
    <div className="container max-w-5xl mt-8 md:mb-32">
      <div className="max-w-4xl mb-12 md:mb-32">
        <div>
          <h2 className="p-0 m-0 text-4xl font-normal ">
            Verify Verus signatures.
          </h2>
          <p className="leading-normal font-p">
            Verify signatures from messages, files or hashes with our easy to
            use tool.
          </p>
        </div>
        <div>
          <SigTabWindow />
        </div>
       
        <div>
          <h3 className="text-2xl font-normal">
            Want to sign files, messages or hashes?
          </h3>
          <p className="leading-normal font-p">
            <a href="#">Download Verus Desktop (Link?)</a>, register your
            VerusID and start signing!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifySignatures;
