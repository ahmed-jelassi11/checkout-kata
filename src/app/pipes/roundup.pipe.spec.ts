import {RoundUpPipe} from "./roundup.pipe";

describe('RoundUp Pipe', () => {

  let pipe: RoundUpPipe;
  beforeEach(()=>{
    pipe = new RoundUpPipe();
  })
  it("should round up ", ()=>{
    const values = [0.99, 1, 1.01, 1.02, 1.06];
    const expectedArray =[ 1, 1, 1.05, 1.05, 1.1]
    expect(pipe.transform(values[0])).toBe(expectedArray[0]);
    expect(pipe.transform(values[1])).toBe(expectedArray[1]);
    expect(pipe.transform(values[2])).toBe(expectedArray[2]);
    expect(pipe.transform(values[3])).toBe(expectedArray[3]);
    expect(pipe.transform(values[4])).toBe(expectedArray[4]);
  })

});
