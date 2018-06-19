A thin wrapper for [OpenLayers 4](http://openlayers.org/) in [React](https://facebook.github.io/react/).

The goal is to be able to write applications using OpenLayers maps in a declarative way. For example, the following is JSX, which can be returned by the render() method on a React component, to generate a map with a red square near the equator.

    <Map view=<View resolution={10000} center={[0, 0]}/>>
      <layer.Tile>
        <source.OSM />
      </layer.Tile>
      <layer.Vector>
        <source.Vector>
          <Feature style={{stroke: {color: [255, 0, 0, 1]}}}>
            <geom.LineString coordinates={[[0, 0], [100000, 0], [100000, 100000], [0, 100000]]} />
          </Feature>
        </source.Vector>
      </layer.Vector>
    </Map>

To understand what each element does, read the [OpenLayers API documentation](http://openlayers.org/en/latest/apidoc/).

This version is forked from [`ol-react`](https://npmjs.com/package/ol-react),
originally written by Richard Hills. Our version adds support for the new
React context API, gets rid of class inheritances and includes several other
OpenLayers components that the original version did not contain. Since the fork
has diverged too much from upstream, we have renamed it to `@collmot/ol-react`.

We are very grateful to Richard Hills for publishing the first version of
`ol-react` on which this version is built.
