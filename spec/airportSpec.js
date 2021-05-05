describe('Airport', function() {
  it('allows airport to accept landing plane', function() {
    airport = new Airport;
    
    expect(airport.hangar()).toEqual([]);

  });
});

// it('planes can be instructed to land at an airport', () => {
//   plane.land(airport);
//   expect(airport.planes()).toContain(plane);



    //   it "allows airport to accept landing plane" do
    //   allow(airport).to receive(:land)
    //   airport.hangar << plane
    //   expect(airport.hangar).to include(plane)
    // end